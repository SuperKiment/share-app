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
  [prenom, setPrenom] = useState("");
  [nom, setNom] = useState("");
  [message, setMessage] = useState("");
  const [chargement, setChargement] = useState(false);
  const { user, updateUser } = useUser();

  const inscrire = async () => {
    if (email == "" || nom == "" || prenom == "" || mdp == "") return;

    setChargement(true);

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


    const data = await fetch(nuage + "api/register", {
      method: "POST",
      body: json,
      headers: {
        "Content-type": "application/ld+json",
        accept: "application/ld+json",
      },
    });
   
    try {
      const dataJSON = await data.json();
      setMessage(await dataJSON["hydra:title"]);

      if ((await dataJSON["hydra:title"]) == "success") {
        navigation.navigate("Connexion");
      }
    } catch (e) {
      setMessage("Unexpected error");
    }

    /*
    if (dataJSON != null && dataJSON["hydra:description"] != undefined)
      setMessage(dataJSON["hydra:description"]);

    */
    setChargement(false);
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
      <View style={styles.ecart}>
            <Text style={styles.blueTitre}>Inscription</Text>

        <TextInput
          placeholder="E-Mail"
          keyboardType="email-address"
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Prénom"
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setPrenom}
        />

        <TextInput
          placeholder="Nom"
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setNom}
        />

        <TextInput
          placeholder="Mot de passe"
          secureTextEntry={true}
          style={[styles.TextInput, { padding: 10 }]}
          placeholderTextColor={styles.TextInput.color}
          onChangeText={setMdp}
        />

        <TouchableOpacity
          title="Inscription"
          style={styles.petitBouton}
          onPress={() => {
            inscrire();
          }}>
            <Text style={styles.texteBouton}>Inscription</Text>
          </TouchableOpacity>

        <TouchableOpacity
          title="Connexion"
          style={styles.petitBouton}
          onPress={() => {
            navigation.navigate("Connexion");
          }}>
            <Text style={styles.texteBouton}>Se connecter</Text>
          </TouchableOpacity>

        {chargement && <Text>Chargement...</Text>}
        <Text>{message}</Text>
        </View>
      </View>
    </View>
  );
};
