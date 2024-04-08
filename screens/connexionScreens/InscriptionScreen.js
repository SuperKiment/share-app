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

    setChargement(true);
    console.log("début");

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

    console.log("json ok");

    // console.log(json);
    console.log("début fetch");

    const data = await fetch(nuage + "registerapi", {
      method: "POST",
      body: json,
      headers: {
        "Content-type": "application/ld+json",
        accept: "application/ld+json",
      },
    });

    console.log("fecth ok");
    
    try {
      const dataJSON = await data.json();
      console.log(dataJSON);
      setMessage(await dataJSON["hydra:title"]);

      if (await dataJSON["hydra:title"] == "success") {
        navigation.navigate("Connexion")
      }
    } catch (e) {
      console.log(e);
      setMessage("Unexpected error");
    }

    /*
    if (dataJSON != null && dataJSON["hydra:description"] != undefined)
      setMessage(dataJSON["hydra:description"]);

    console.log(dataJSON);
    */
    setChargement(false);
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
