import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";

export default () => {
  [variable, setVariable] = useState(0);

  return (
    <View style={styles.body}>
      <Header />
        <View style={styles.blueContainer}>
          <View style={styles.ecart}>
          <Text style={styles.blueTitre}>Profil</Text>
          <Text style={styles.ProfilTexte}><Text style={styles.gras}>Nom :</Text> Parisot</Text>
          <Text style={styles.ProfilTexte}><Text style={styles.gras}>Prénom :</Text> Clément</Text>
          <Text style={styles.ProfilTexte}><Text style={styles.gras}>Email :</Text> Kiment2002@gameil.com</Text>
          <Text style={styles.ProfilTexte}><Text style={styles.gras}>Fichiers partagés :</Text> 45</Text>
          <View style={styles.footer}>
            <View style={styles.row}>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png",
                }}
                />
              <Text style={styles.mentions}>A propos</Text>
            </View>
            <View style={styles.row}>
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
