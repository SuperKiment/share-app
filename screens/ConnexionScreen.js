import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Header from "../components/Header";
import styles from "../Styles/styles";
import { useUser } from "../components/UserConnexion";

export default () => {
  [email, setEmail] = useState("");
  [mdp, setMdp] = useState("");
  const { user, updateUser } = useUser();

  const verifyUser = async () => {
    if (email != "" && mdp != "") {
      const data = await fetch(
        "https://s4-8060.nuage-peda.fr/ShareMelanie/Share/public/api-connectuser?email=" +
          email +
          "&mdp=" +
          mdp
      );
      const dataJSON = await data.json();

      console.log(dataJSON);

      if (dataJSON.state == "success") updateUser(JSON.parse(dataJSON.data));
    }
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
      </View>
    </View>
  );
};
