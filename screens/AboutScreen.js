import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default () => {
  const createurs = [
    {
      id: 1,
      title: "Mélanie BOUDRY",
      role: "Etudiante",
      backgroundColor: "red",
    },
    {
      id: 2,
      title: "Agathe POTEAUX",
      role: "Etudiante",
      backgroundColor: "green",
    },
    {
      id: 3,
      title: "Antoine BRUYE",
      role: "Etudiant",
      backgroundColor: "blue",
    },
    {
      id: 4,
      title: "Clément PARISOT",
      role: "Etudiant",
      backgroundColor: "yellow",
    },
  ];

  const itemDimension = (Dimensions.get("window").width - 40) / 2 - 20;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.headerText}>Les créateurs</Text>
      <Text>
        Nous sommes tous élèves de deuxième année BTS SIO option SLAM.
      </Text>
      <FlatGrid
        itemDimension={itemDimension}
        data={createurs}
        style={styles.gridView}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemCode}>{item.role}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    margin: 20,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
});
