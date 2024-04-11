import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import { nuage } from "../config/config";

function formatDate(dateString) {
  const date = new Date(dateString); // Convertir la chaîne de date en objet Date
  const options = { day: "numeric", month: "long", year: "numeric" }; // Options de formatage de la date
  return date.toLocaleDateString("fr-FR", options); // Formater la date selon les options
}

export default ({ route, navigation }) => {
  const { idFichier } = route.params;
  const { type } = route.params;
  const [fichier, setFichier] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFichierById(idFichier);
  });

  const getFichierById = async (idFichier) => {
    const data = await fetch(nuage + "api/fichiers/" + idFichier);
    const dataJSON = await data.json();
    setFichier(dataJSON);
    setLoading(false);
  };

  const revoquer = async (idUser) => {
    let fichierResponse = await fetch(nuage + "api/fichiers/" + idFichier);
    let fichierData = await fichierResponse.json();
    let userTab = [];
    let userIds = fichierData.user.map((user) => {
      let id = user["@id"];
      if (id.split("/").pop() != idUser) {
        userTab.push(id);
      }
    });
    const data = await fetch(nuage + "api/fichiers/" + idFichier, {
      headers: {
        Accept: "application/ld+json",
        "Content-Type": "application/merge-patch+json",
      },
      method: "PATCH",
      body: JSON.stringify({
        user: userTab,
      }),
    }).then(function (response) {
      return response.json();
    });
    getFichierById(idFichier);
    setLoading(false);
  };

  return (
    <View style={styles.body}>
      {loading ? (
        <View style={styles.blueContainer}>
          <Text>Chargement en cours...</Text>
        </View>
      ) : (
        <ScrollView style={styles.blueContainer}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>{fichier.nomOriginal}</Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Extension : </Text> {fichier.extension}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Date d'envoi : </Text>
              {fichier.dateEnvoi && formatDate(fichier.dateEnvoi)}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Propriétaire : </Text>
              {fichier.proprietaire.lastname +
                " " +
                fichier.proprietaire.firstname}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Taille : </Text>{" "}
              {Math.round(fichier.taille / 1024)} kilo-octets
            </Text>

            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Catégorie : </Text>
            </Text>
            {fichier.categories.length > 0 ? (
              <View style={styles.categorieContainer}>
                <Text style={styles.ProfilTexte}>
                  {fichier.categories.map((categorie, index) => (
                    <React.Fragment key={index}>
                      <Text>{"\u2022"} </Text>
                      <Text>
                        {categorie.libelle}
                        {"\n"}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </View>
            ) : (
              <View style={styles.categorieContainer}>
                <Text style={styles.ProfilTexte}>Aucune catégorie</Text>
              </View>
            )}

            {type != "Partage" ? (
              <>
                <Text style={styles.ProfilTexte}>
                  <Text style={styles.gras}>Partagé à : </Text>
                </Text>
                {fichier["user"].length > 0 ? (
                  <View style={[styles.categorieContainer]}>
                    <Text style={styles.Margin}>
                      {fichier["user"].map((user, index) => (
                        <React.Fragment key={index}>
                          <TouchableOpacity
                            onPress={() => {
                              {
                                let id = user["@id"].split("/").pop();
                                revoquer(id);
                              }
                            }}
                            style={styles.petitBouton}
                          >
                            <Text style={styles.textePetitBouton}>X</Text>
                          </TouchableOpacity>
                          <Text style={styles.PersonneTexte}>
                            {user["lastname"]} {user["firstname"]}
                            {"\n"}
                          </Text>
                        </React.Fragment>
                      ))}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.categorieContainer}>
                    <Text style={styles.ProfilTexte}>Aucun partage</Text>
                  </View>
                )}
                <TouchableOpacity
                  style={styles.petitBouton}
                  onPress={() => {
                    navigation.navigate("Partager", {
                      type: "Fichier",
                      idFichier: fichier["id"],
                    });
                  }}
                >
                  <Text style={styles.textePetitBouton}>Partager</Text>
                </TouchableOpacity>
              </>
            ) : (
              <View></View>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
