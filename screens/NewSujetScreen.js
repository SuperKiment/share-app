import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../Styles/styles";
import { nuage, IRInuage } from "../config/config";
import { useUser } from "../components/UserConnexion";
import Header from "../components/Header";

export default ({ navigation }) => {
  const { user } = useUser();

  const FormulaireAddSujet = () => {
    const token = user.token;
    const [contentSujet, setContentSujet] = useState("");
    const [titleSujet, setTitleSujet] = useState("");

    const addSujet = async () => {
      if (contentSujet != "" && titleSujet != "") {
        let idProprietaire = user["id"];
        const currentDate = new Date();
        let userIRI = `${IRInuage}api/users/${idProprietaire}`;

        const data = await fetch(nuage + "api/messages", {
          headers: {
            Accept: "application/ld+json",
            "Content-Type": "application/ld+json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            title: titleSujet,
            datePost: currentDate,
            content: contentSujet,
            user: userIRI,
            messages: [],
          }),
        })
          .then(function (response) {
            navigation.goBack();
            return response.json();
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        alert("Un ou des champs sont vides !");
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
