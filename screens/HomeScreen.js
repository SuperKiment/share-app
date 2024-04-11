import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";

export default () => {
  [variable, setVariable] = useState(0);

  return (
    <View style={styles.body}>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.titre}>Accueil</Text>
        <Text style={styles.description}>
          Une application mobile révolutionnaire conçue pour{" "}
          <Text style={[styles.gras, styles.italic]}>
            simplifier le partage
          </Text>{" "}
          de fichiers entre utilisateurs Android.
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/imageAccueil.jpg")}
        />
        <Text style={styles.description}>
          Avec une interface conviviale et des fonctionnalités avancées, "Share"
          vise à faciliter{" "}
          <Text style={[styles.gras, styles.italic]}>
            l'échange de données numériques
          </Text>{" "}
          de manière sécurisée et efficace.
        </Text>
        <Text style={styles.description}>
          "Share" propose également un espace d'échange sous forme de forum
          visant aussi à faciliter{" "}
          <Text style={[styles.gras, styles.italic]}>
            l'échange entre utilisateurs
          </Text>{" "}
          de manière sécurisée et efficace.
        </Text>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.texteBouton}>Partager</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
