import { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import MentionsLegales from "./MentionsLegalesScreen";
import About from "./AboutScreen";
import { useUser } from "../components/UserConnexion";

export default ({ navigation }) => {
  [variable, setVariable] = useState(0);
  const { user, updateUser } = useUser();

  console.log(user);

  const deconnexion = ()=> {
    updateUser(null);
  }

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          <Text style={styles.blueTitre}>Profil</Text>
          <Button title="Déconnexion" onPress={deconnexion}/>

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
        </View>
      </View>
    </View>
  );
};
