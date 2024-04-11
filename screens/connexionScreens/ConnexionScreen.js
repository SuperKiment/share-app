import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Header from "../../components/Header.js";
import styles from "../../Styles/styles.js";
import { useUser } from "../../components/UserConnexion.js";
// import { compare } from "react-native-bcrypt";
import { nuage } from "../../config/config.js";

console.log(nuage);

export default ({ navigation }) => {
  [email, setEmail] = useState("");
  [mdp, setMdp] = useState("");
  [message, setMessage] = useState("");
  const [chargement, setChargement] = useState(false);
  const { user, updateUser } = useUser();

  const testToken = async () => {
    try {
      const data = await fetch(
        "https://s4-8060.nuage-peda.fr/ShareMelanie/Share/api/authentication_token",
        {
          method: "POST",
          body: JSON.stringify({
            email: "melanie.boudry@ecoles-epsi.net",
            password: "123456789",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const dataJSON = await data.text();

      console.log(dataJSON);
    } catch (e) {
      console.log(e);
    }
  };

  const connectUser = async (email, mdp) => {
    setChargement(true);

    try {
      const url = nuage + "api/authentication_token";
      console.log(url);
      const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: mdp,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const dataJSON = await data.json();

      console.log("data : ", dataJSON);

      if (dataJSON.message != undefined) setMessage(dataJSON.message);

      if (dataJSON.code == undefined && dataJSON.data != undefined) {
        updateUser({ ...dataJSON.data, email: email, token: dataJSON.token});
      }
    } catch (e) {
      console.log(e);
    }
    setChargement(false);
  };

  const verifyUser = async () => {
    if (email == "" || mdp == "") return;

    connectUser(email.toLowerCase(), mdp);
  };

  const verifyUserDev = async () => {
    connectUser("melanie.boudry@ecoles-epsi.net", "123456789");
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Text>Connexion</Text>

        <TextInput
          placeholder="E-Mail"
          keyboardType="email-address"
          style={{ padding: 10 }}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Mot de passe"
          style={{ padding: 10 }}
          onChangeText={setMdp}
        />

        <Button
          title="Connexion"
          onPress={() => {
            verifyUser();
            // console.log(email, mdp);
          }}
        />

        <Button
          title="Connexion dev"
          onPress={() => {
            verifyUserDev();
          }}
        />

        <Button
          title="Inscription"
          onPress={() => {
            navigation.navigate("Inscription");
          }}
        />

        <Button
          title="Test Token"
          onPress={() => {
            testToken();
          }}
        />

        {chargement && <Text>Chargement...</Text>}
        <Text>{message}</Text>
      </View>
    </View>
  );
};
