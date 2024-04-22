import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../Styles/styles";
import { nuage, IRInuage } from "../config/config";
import { useUser } from "../components/UserConnexion";
import Header from "../components/Header";

export default ({ route, navigation }) => {
  const { user } = useUser();

  const FormulaireRepondreSujet = () => {
    const parentMessage = route.params.message;
    const token = user.token;
    const [contentSujet, setContentSujet] = useState("");
    const [titleSujet, setTitleSujet] = useState("");

    const addSujet = async () => {
      if (contentSujet != "" && titleSujet != "") {
        let idProprietaire = user["id"];
        const currentDate = new Date();
        let userIRI = `${IRInuage}api/users/${idProprietaire}`;
        let parentMessageIRI = `${IRInuage}api/messages/${parentMessage.id}`;

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
            parent: parentMessageIRI,
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
        <ScrollView>
          <Text style={styles.blueTitre}>Ajout d'une Réponse</Text>
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
            Titre de la réponse
          </Text>
          <TextInput
            defaultValue={titleSujet}
            style={[styles.TextInput, { height: 100 }]}
            onChangeText={setTitleSujet}
            multiline
          />
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
            Contenu de la réponse message
          </Text>
          <TextInput
            value={contentSujet}
            style={[styles.TextInput, { height: 150 }]}
            onChangeText={setContentSujet}
            placeholder="Enter text here..."
            multiline
          />

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
        </ScrollView>
      </>
    );
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          <FormulaireRepondreSujet />
        </View>
      </View>
    </View>
  );
};
