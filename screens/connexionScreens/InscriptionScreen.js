import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Header from "../../components/Header.js";
import styles from "../../Styles/styles.js";
import { useUser } from "../../components/UserConnexion.js";
// import { compare } from "react-native-bcrypt";
import { nuage } from "../../config/config.js";

// console.log(nuage);

export default ({ navigation }) => {
  [email, setEmail] = useState("");
  [mdp, setMdp] = useState("");
  [prenom, setPrenom] = useState("");
  [nom, setNom] = useState("");
  [message, setMessage] = useState("");
  const [chargement, setChargement] = useState(false);
  const { user, updateUser } = useUser();

  const inscrire = async () => {
    if (email == "" || nom == "" || prenom == "" || mdp == "") return;

    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTE2MzkzMDUsImV4cCI6MTcxMTY0MjkwNSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1lbGFuaWUuYm91ZHJ5QGVjb2xlcy1lcHNpLm5ldCJ9.hw5Rz9_9MN3ut3QCZln_JHFzxWJY-yv3pmiDVGccNRRUEhrPHpbGT0PZF1VhEf1eCl5A7nzt2KOlSbSldLVrdVIM8sWqt-EIyLugs1t95yR4gYsVCOoU0zD9XPIQbHPtIUpHM9AeNbLkvfrRe3kft-xvgakeWv453jH107Lc4Qp3ipKIbwxLF6maUvUC1ppg8zPcAGRIXzpHTFll0FeVAf_pHd53CYmy3PbOuYdVr870tvPapbJn3XbOWvCB3Pk6eBSIQb1kXCfvbUPkDCiX6kxTQBRGgZjPgnbp9gf1TJOK9QGQyg6Ls1g5-88wi387sROfuL9BOHg2rglNHzKFsg";

    const json = JSON.stringify({
      email: email,
      roles: [],
      password: mdp,
      isVerified: true,
      dateRegister: new Date().toISOString(),
      lastname: nom,
      firstname: prenom,
      fichiers: [],
      telechargers: [],
      fichiersPartages: [],
      messages: [],
    });

    // console.log(json);

    const data = await fetch(nuage + "api/users", {
      method: "POST",
      body: json,
      headers: {
        "Content-type": "application/ld+json",
        Authorization: `Bearer ${token}`,
        accept: "application/ld+json",
      },
    });

    const dataJSON = await data.text();

    // console.log(dataJSON);
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Text>Inscription</Text>

        <TextInput
          placeholder="E-Mail"
          keyboardType="email-address"
          style={{ padding: 10 }}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Prénom"
          style={{ padding: 10 }}
          onChangeText={setPrenom}
        />

        <TextInput
          placeholder="Nom"
          style={{ padding: 10 }}
          onChangeText={setNom}
        />

        <TextInput
          placeholder="Mot de passe"
          style={{ padding: 10 }}
          onChangeText={setMdp}
        />

        <Button
          title="Inscription"
          onPress={() => {
            inscrire();
          }}
        />

        <Button
          title="Connexion"
          onPress={() => {
            navigation.navigate("Connexion");
            // console.log(email, mdp);
          }}
        />

        {chargement && <Text>Chargement...</Text>}
        <Text>{message}</Text>
      </View>
    </View>
  );
};
