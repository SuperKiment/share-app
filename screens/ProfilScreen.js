import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import MentionsLegales from "./MentionsLegalesScreen";
import About from "./AboutScreen";
import { useUser } from "../components/UserConnexion";

export default ({ navigation }) => {
  const { user, updateUser } = useUser();
  [variable, setVariable] = useState(0);
  [firstname, setFirstname] = useState(user != null ? user.firstname : "");
  [lastname, setLastname] = useState(user != null ? user.lastname : "");
  const id = user != null ? user.id : 0;

  const [modification, setModification] = useState(false);

  console.log(user);

  const deconnexion = () => {
    navigation.navigate("Connexion");
    updateUser(null);
  };

  const AfficherProfil = () => {
    return (
      <>
        <Text style={styles.blueTitre}>Profil</Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Nom : {user.lastname}</Text>
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Prénom :</Text> {user.firstname}
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Email :</Text> {user.email}
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Fichiers partagés :</Text> 45
        </Text>
        <TouchableOpacity onPress={deconnexion} style={styles.bouton}>
          <Text style={styles.texteBouton}>Déconnexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setModification(!modification);
          }}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Modifier le profil</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("A propos")}
              style={styles.row}
            >
              <Image
                style={styles.logo}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png",
                }}
              />
              <Text style={styles.mentions}>A propos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Mentions Légales")}
              style={styles.row}
            >
              <Image
                style={styles.logo}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4104/4104794.png",
                }}
              />
              <Text style={styles.mentions}>Mentions légales</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const updateProfil = async () => {
    if (id != "") {
      const data = await fetch(
        "https://s4-8056.nuage-peda.fr/ShareFinal/Share/public/api-updateuser?id=" +
          id +
          "&firstname=" +
          firstname +
          "&lastname=" +
          lastname
      );
      const dataJSON = await data.json();

      console.log(dataJSON);

      if (dataJSON.state == "success") {
        updateUser(JSON.parse(dataJSON.data));
        console.log("User profile updated successfully");
        setModification(!modification);
      } else {
        console.error("Failed to update user profile");
      }
    } else {
      console.log("pas d'id");
    }

  };

  const AfficherModif = () => {
    return (
      <>
        <Text style={styles.titre}>Modification du profil</Text>
        <Text style={styles.description}>Nom</Text>
        <TextInput
          value={lastname}
          style={{ padding: 10 }}
          onChangeText={setLastname}
        />
        <Text style={styles.description}>Prénom</Text>
        <TextInput
          value={firstname}
          style={{ padding: 10 }}
          onChangeText={setFirstname}
        />
        <TouchableOpacity onPress={updateProfil} style={styles.bouton}>
          <Text style={styles.texteBouton}>Modifier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setModification(!modification);
          }}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Annuler</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          {user != null && (
            <>{modification ? <AfficherModif /> : <AfficherProfil />}</>
          )}
        </View>
      </View>
    </View>
  );
};
