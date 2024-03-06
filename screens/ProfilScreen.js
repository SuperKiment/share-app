import { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import MentionsLegales from "./MentionsLegalesScreen";
import About from "./AboutScreen";
import { useUser } from "../components/UserConnexion";

export default () => {
  [variable, setVariable] = useState(0);
  const { user } = useUser();

  console.log(user);

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
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
          <View style={styles.footer}>
            <View style={styles.row} component={About}>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png",
                }}
              />
              <Text style={styles.mentions}>A propos</Text>
            </View>
            <View style={styles.row} component={MentionsLegales}>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4104/4104794.png",
                }}
              />
              <Text style={styles.mentions}>Mentions légales</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
