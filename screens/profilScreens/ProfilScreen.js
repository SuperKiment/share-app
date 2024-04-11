import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../Styles/styles";
import Header from "../../components/Header";
import { useUser } from "../../components/UserConnexion";

export const Profil = ({ navigation }) => {
  const { user, updateUser } = useUser();
  [variable, setVariable] = useState(0);
  [firstname, setFirstname] = useState(user != null ? user.firstname : "");
  [lastname, setLastname] = useState(user != null ? user.lastname : "");
  const id = user != null ? user.id : 0;
  // const nbrFichiers = user.fichiers.length
  // console.log(user);

  useEffect(() => {}, []);

  const deconnexion = () => {
    updateUser(null);
  };

  const AfficherProfil = () => {
    return (
      <>
        <Text style={styles.blueTitre}>Profil</Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Nom : </Text> {user.nom}
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Prénom :</Text> {user.prenom}
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Email :</Text> {user.email}
        </Text>
        <Text style={styles.ProfilTexte}>
          <Text style={styles.gras}>Fichiers partagés :</Text> 123
        </Text>
        <TouchableOpacity onPress={deconnexion} style={styles.bouton}>
          <Text style={styles.texteBouton}>Déconnexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Modification");
          }}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Modifier le profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ModificationMDP");
          }}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Modifier le mot de passe</Text>
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

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          <AfficherProfil />
        </View>
      </View>
    </View>
  );
};
