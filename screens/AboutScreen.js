import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "../Styles/styles";
import Header from "../components/Header";

export default () => {
  const createurs = [
    {
      id: 1,
      title: "Mélanie BOUDRY",
      role: "Etudiante",
      backgroundColor: "#F05C5C",
      url: "https://s4-8057.nuage-peda.fr/portfolio-mboudry/",
    },
    {
      id: 2,
      title: "Agathe POTEAUX",
      role: "Etudiante",
      backgroundColor: "#87C48A",
      url: "https://s4-8056.nuage-peda.fr/portfolio/AgatheP/",
    },
    {
      id: 3,
      title: "Antoine BRUYE",
      role: "Etudiant",
      backgroundColor: "#7A93EE",
      url: "https://s4-8058.nuage-peda.fr/Portfolio/",
    },
    {
      id: 4,
      title: "Clément PARISOT",
      role: "Etudiant",
      backgroundColor: "#EE8AFE",
      url: "https://superkiment.fr/",
    },
  ];

  const itemDimension = (Dimensions.get("window").width - 100) / 2 - 20;

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.titre}>Les créateurs</Text>
        <Text style={styles.description}>
          Nous sommes tous élèves de deuxième année BTS SIO option SLAM. Ce
          projet rentre dans le cadre de notre Epreuve E5 de BTS SIO (option
          SLAM).
        </Text>
        {
          <FlatGrid
            itemDimension={itemDimension}
            data={createurs}
            style={styles.gridView}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url);
                }}
                style={[
                  styles.itemContainer,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemCode}>{item.role}</Text>
              </TouchableOpacity>
            )}
          />
        }
      </View>
    </View>
  );
};
