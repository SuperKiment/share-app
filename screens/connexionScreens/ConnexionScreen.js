import { useEffect, useState } from "react";
import { View, Text, Button, TextInput, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header.js";
import styles from "../../Styles/styles.js";
import { useUser } from "../../components/UserConnexion.js";
// import { compare } from "react-native-bcrypt";
import { nuage } from "../../config/config.js";

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
            email: "",
            password: "",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const dataJSON = await data.text();

    } catch (e) {
      console.log(e);
    }
  };

  const connectUser = async (email, mdp) => {
    setChargement(true);

    try {
      const url = nuage + "api/authentication_token";
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

      if (dataJSON.message != undefined) setMessage(dataJSON.message);

      if (dataJSON.code == undefined && dataJSON.data != undefined) {
        updateUser({ ...dataJSON.data, email: email, token: dataJSON.token });
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
    connectUser("laurence.leroy@live.com", "laurence");
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
      <View style={styles.ecart}>
            <Text style={styles.blueTitre}>Connexion</Text>

        <TextInput
          placeholder="E-Mail"
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry={true}
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setMdp}
        />

        <TouchableOpacity
          title="Connexion"
          style={styles.petitBouton}
          onPress={() => {
            verifyUser();
          }}>
          <Text style={styles.texteBouton}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Inscription"
          style={styles.petitBouton}
          onPress={() => {
            navigation.navigate("Inscription");
          }}>
          <Text style={styles.texteBouton}>Inscription</Text>
          </TouchableOpacity>

        {chargement && <Text>Chargement...</Text>}
        <Text>{message}</Text>
      </View>
      </View>
    </View>
  );
};
