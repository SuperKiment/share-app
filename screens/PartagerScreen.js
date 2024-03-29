import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../Styles/styles";
import Header from "../components/Header";
import { nuage } from "../config/config";
import { FlatGrid } from "react-native-super-grid";

export default ({ route }) => {
  const { idFichier } = route.params;
  const { type } = route.params;
  const [fichier, setFichier] = useState({});
  const [utilisateurs, setUtilisateurs] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFichierById(idFichier);
    getUtilisateurs();
  }, []);

  const getFichierById = async (idFichier) => {
    const data = await fetch(nuage + "api/fichiers/" + idFichier);
    const dataJSON = await data.json();
    setFichier(dataJSON);
    setLoading(false);
  };

  const getUtilisateurs = async () => {
    const data = await fetch(nuage + "api/users");
    const dataJSON = await data.json();
    setUtilisateurs(dataJSON);
    setLoading(false);
  };
  const RenderPickerItems = () => {
    const pickerItems = [];
    if (utilisateurs["hydra:member"] == undefined) return;

    for (let i = 0; i < utilisateurs["hydra:member"].length; i++) {
      let item = utilisateurs["hydra:member"][i];
      pickerItems.push(
        <Picker.Item key={item.id} label={item.email} value={item.id} />
      );
    }
    return pickerItems;
  };

  const Partager = async () => {
    if (utilisateurs["hydra:member"][selectedValue] != undefined) {
      let id = utilisateurs["hydra:member"][selectedValue].id;
      let userIRI = `/Share/api/users/${id}`;
      let fichierResponse = await fetch(nuage + "api/fichiers/" + idFichier);
      let fichierData = await fichierResponse.json();
      let userTab = [];
      let userIds = fichierData.user.map(user => {
        let id = user["@id"];
        userTab.push(id);
      });  
      userTab.push(userIRI);
      const data = await fetch(nuage + "api/fichiers/" + idFichier, {
        headers: {
          Accept: "application/ld+json",
          "Content-Type": "application/merge-patch+json",
        },
        method: "PATCH",
        body: JSON.stringify({
          user: userTab,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
      getFichierById(idFichier);
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
          <ScrollView style={styles.blueContainer}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>{fichier["nomOriginal"]}</Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Propriétaire : </Text>
              {fichier.proprietaire != undefined ? fichier.proprietaire.lastname : "fuck" +
                " " +
                fichier.proprietaire != undefined ? fichier.proprietaire.firstname : "fuck"}
            </Text>
            <Text style={styles.ProfilTexte}>
              <Text style={styles.gras}>Taille : </Text>{" "}
              {Math.round(fichier["taille"] / 1024)} kilo-octets
            </Text>

            {type != "Partage" ? (
              <>
                <Text style={styles.ProfilTexte}>
                  <Text style={styles.gras}>Partagé à : </Text>
                </Text>
                {fichier["user"].length > 0 ? (
                  <View style={styles.categorieContainer}>
                    <Text style={styles.ProfilTexte}>
                      {fichier["user"].map((user, index) => (
                        <React.Fragment key={index}>
                          <Text>{"\u2022"} </Text>
                          <Text>
                            {user != undefined ?user.lastname :"fuck"} {user != undefined ?user.firstname :"fuck"}
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
            <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
              Partager à :{" "}
            </Text>
            <Picker
              selectedValue={selectedValue + 1}
              onValueChange={(itemValue) => {
                setSelectedValue(itemValue - 1);
              }}
              style={styles.picker2}
              mode={"dropdown"}
            >
              {RenderPickerItems()}
            </Picker>
            <TouchableOpacity
              onPress={() => {
                {
                  Partager();
                }
              }}
              style={styles.petitBouton}
            >
              <Text style={styles.textePetitBouton}>Partager</Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
      )}
    </View>
  );
};
