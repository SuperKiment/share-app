import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Header from "../components/Header";
import styles from "../Styles/styles";
import { useUser } from "../components/UserConnexion";
// import { compare } from "react-native-bcrypt";
import { nuage } from "../config/config.js";

console.log(nuage);

export default () => {
  [email, setEmail] = useState("");
  [mdp, setMdp] = useState("");
  [message, setMessage] = useState("");
  const [chargement, setChargement] = useState(false);
  const { user, updateUser } = useUser();

  const verifyUser = async () => {
    if (email != "" && mdp != "") {
      const data = await fetch(
        nuage + "api-connectuser?email=" + email + "&mdp=" + mdp
      );
      const dataJSON = await data.json();

      console.log(dataJSON);

      if (dataJSON.state == "success") updateUser(JSON.parse(dataJSON.data));
    }
  };

  const verifyUserDev = async () => {
    setChargement(true);

    const data = await fetch(
      nuage +
        "api-connectuser?email=melanie.boudry@ecoles-epsi.net&mdp=123456789"
    );
    const dataJSON = await data.json();

    console.log(dataJSON);
    setMessage(dataJSON.message);

    if (dataJSON.state == "success") {
      const userTemp = JSON.parse(dataJSON.data);

      // const isPasswordOK = await compare(userTemp.password, "123456789");
      // if (await isPasswordOK) updateUser(userTemp);

      updateUser(userTemp);
    }

    setChargement(false);
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
            console.log(email, mdp);
          }}
        />

        <Button
          title="Connexion dev"
          onPress={() => {
            verifyUserDev();
          }}
        />

        {chargement && <Text>Chargement...</Text>}
        <Text>{message}</Text>
      </View>
    </View>
  );
};
