import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";

function formatDate(dateString) {
  const date = new Date(dateString); // Convertir la chaîne de date en objet Date
  const options = { day: "numeric", month: "long", year: "numeric" }; // Options de formatage de la date
  return date.toLocaleDateString("fr-FR", options); // Formater la date selon les options
}

export default ({ route }) => {
  const { idFichier } = route.params;
  const { type } = route.params;
  const [fichier, setFichier] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFichierById(idFichier);
  }, []);

  const getFichierById = async (idFichier) => {
    const data = await fetch(
      "https://s4-8057.nuage-peda.fr/share/api-getfichierByInfo?idFichier=" +
        idFichier
    );
    const dataJSON = await data.json();
    if (dataJSON.state === "success") {
      setFichier(dataJSON.data);
      setLoading(false);
    }
  };

  return (
    <View style={styles.body}>
      {loading ? (
        <View style={styles.blueContainer}>
          <Text>Chargement en cours...</Text>
        </View>
      ) : (
        <View style={styles.blueContainer}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>{fichier.nom_original}</Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Extension : </Text> {fichier.extension}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Date d'envoi : </Text>
              {fichier.date_envoi && formatDate(fichier.date_envoi.date)}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Propriétaire : </Text>
              {fichier.proprietaire_name}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Taille : </Text> {fichier.taille / 1024}{" "}
              kilo-octets
            </Text>

            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Catégorie : </Text>
            </Text>
            {fichier.categorie.length > 0 ? (
              <View style={styles.categorieContainer}>
                <Text style={styles.ProfilTexte}>
                  {fichier.categorie.map((categorie, index) => (
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
                {fichier.usersPartagees.length > 0 ? (
                  <View style={styles.categorieContainer}>
                    <Text style={styles.ProfilTexte}>
                      {fichier.usersPartagees.map((userPartagee, index) => (
                        <React.Fragment key={index}>
                          <Text>{"\u2022"} </Text>
                          <Text>
                            {userPartagee.lastname} {userPartagee.firstname}
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
              </>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
