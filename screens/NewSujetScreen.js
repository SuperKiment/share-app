import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "../Styles/styles";
import { nuage } from "../config/config";
import { IRInuage } from "../config/config";
import { useUser } from "../components/UserConnexion";
import Header from "../components/Header";

export default ({ navigation }) => {
  const { user } = useUser();

  const FormulaireAddSujet = () => {
    const [contentSujet, setContentSujet] = useState("");
    const [titleSujet, setTitleSujet] = useState("");

    const addSujet = async () => {
      try {
        if (contentSujet != "" && titleSujet != "") {
          const url = await fetch(nuage + "api/messages");
          let idProprietaire = user["id"];
          const currentDate = new Date();
          const isoDateString = currentDate.toISOString();

          const response = await fetch(url, {
            headers: {
              Accept: "application/ld+json",
              "Content-Type": "application/merge-patch+json",
            },
            method: "POST",
            body: JSON.stringify({
              title: titleSujet,
              DatePost: isoDateString,
              content: contentSujet,
              user: IRInuage + "api/users/" + idProprietaire,
            }),
          })
            .then(function (response) {
              console.log("c'est bon");
              navigation.goBack();
              return response.json();
            })
            .catch((error) => {
              console.log(error);
              alert(error);
            });
        } else {
          alert("un ou des champs sont vides");
        }
      } catch (error) {
        console.error(error);
        alert("Pas bon");
      }
    };

    return (
      <>
        <View>
          <Text style={styles.blueTitre}>Ajout de sujet</Text>
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>Titre</Text>
          <TextInput
            defaultValue={titleSujet}
            style={[styles.TextInput, { height: 100 }]}
            onChangeText={setTitleSujet}
            multiline
          />
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
            Contenu du premier message
          </Text>
          <TextInput
            value={contentSujet}
            style={[styles.TextInput, { height: 150 }]}
            onChangeText={setContentSujet}
            placeholder="Enter text here..."
            multiline
          />
        </View>

        <TouchableOpacity onPress={addSujet} style={styles.bouton}>
          <Text style={styles.texteBouton}>Ajouter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
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
          <FormulaireAddSujet />
        </View>
      </View>
    </View>
  );
};
