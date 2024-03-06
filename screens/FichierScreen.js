import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import { useFichier } from "../components/FichierConnexion";

export default ({ route }) => {
  const { idFichier } = route.params;
  const { fichier, setFichier } = useFichier();

  const getFichierById = async () => {
    const data = await fetch(
      "https://s4-8057.nuage-peda.fr/share/api-getfichier?idFichier=" +
        idFichier
    );
    const dataJSON = await data.json();
    //console.log(dataJSON);
    if (dataJSON.state == "success") {
      setFichier(dataJSON.data);
    }
  };

  useEffect(() => {
    getFichierById();
  }, []);

  return <View style={styles.body}></View>;
};
