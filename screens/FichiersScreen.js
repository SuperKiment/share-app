import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

import styles from "../Styles/styles";
import Header from "../components/Header";
import { useUser } from "../components/UserConnexion";
import { Picker } from "@react-native-picker/picker";
import { IRInuage, nuage } from "../config/config";
import * as DocumentPicker from 'expo-document-picker';

export default ({ navigation }) => {
  const itemDimension = (Dimensions.get("window").width - 60) / 3 - 20;
  const [selectedValue, setSelectedValue] = useState("MesFichiers");
  const [fichiers, setFichiers] = useState([]);
  const [fichiersShared, setFichiersShared] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [fileToUpload, setFileToUpload] = useState(null);

  useEffect(() => {
    getFichiersById();
    getFichiersShared();
    setLoading(false);
  }, []);

  const getFichiersById = async () => {
    const data = await fetch(nuage + "api/fichiers?proprietaire=" + user.id);

    const dataJSON = await data.json();
    if (dataJSON["hydra:totalItems"] > 0) {
      setFichiers(dataJSON["hydra:member"]);
    }
  };

  const getFichiersShared = async () => {
    const data = await fetch(nuage + "api/fichiers?user=" + user.id);

    const dataJSON = await data.json();
    if (dataJSON["hydra:totalItems"] > 0) {
      setFichiersShared(dataJSON["hydra:member"]);
    }
  };

  const chooseFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
      console.log(result.assets[0].name);
      setFileToUpload(result);
  }

  const uploadFile = async () => {

    const url = nuage + "api/fichiers";
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        nomOriginal:  fileToUpload.assets[0].name,
        nomServeur: "server_test_file_name",
        dateEnvoi: new Date().toISOString(),
        extension: fileToUpload.assets[0].name.split('.').pop(),
        taille: fileToUpload.assets[0].size,
        proprietaire: IRInuage + "api/users/" + user.id, 
        //"categories": [
        //  "https://example.com/"
        //],
      }),
      headers: {
        "Content-type": "application/ld+json",
      },
    });

    const dataJSON = await data.json();

    console.log(dataJSON)
  }

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.row}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>Fichiers</Text>
          </View>
        </View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
          }}
          style={styles.picker}
          mode={"dropdown"}
        >
          <Picker.Item label="Mes fichiers" value="MesFichiers" />
          <Picker.Item label="Les partages" value="LesPartages" />
          <Picker.Item label="Upload" value="Upload" />
        </Picker>
        {loading ? (
          <View style={styles.body}>
            <Text>Chargement en cours...</Text>
          </View>
        ) : (
          <>
            {selectedValue === "MesFichiers" &&
              (fichiers.length > 0 ? (
                <FlatGrid
                  itemDimension={itemDimension}
                  data={fichiers}
                  style={styles.gridView}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.itemContainerFichier, styles.shadowProp]}
                      onPress={() => {
                        navigation.navigate("Fichier", {
                          type: "Fichier",
                          idFichier: item.id,
                        });
                      }}
                    >
                      {item.extension === "pdf" ? (
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/29/29587.png",
                          }}
                          style={{
                            width: 100,
                            height: 100,
                            tintColor: "white",
                          }}
                        />
                      ) : (
                        <Image
                          source={{
                            uri: "https://cdn.icon-icons.com/icons2/1674/PNG/512/filetext_111171.png",
                          }}
                          style={{
                            width: 100,
                            height: 100,
                            tintColor: "white",
                          }}
                        />
                      )}
                      <Text style={styles.itemCodeFichier}>
                        {item.nomOriginal.length > 20
                          ? item.nomOriginal.slice(0, 20) +
                            "..." +
                            item.extension
                          : item.nomOriginal}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <View style={[styles.loadingContainer]}>
                  <Text>Pas de fichier</Text>
                </View>
              ))}
            {selectedValue === "LesPartages" &&
              (fichiersShared.length > 0 ? (
                <FlatGrid
                  itemDimension={itemDimension}
                  data={fichiersShared}
                  style={styles.gridView}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.itemContainerFichier, styles.shadowProp]}
                      onPress={() => {
                        navigation.navigate("Fichier", {
                          type: "Partage",
                          idFichier: item.id,
                        });
                      }}
                    >
                      {item.extension === "pdf" ? (
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/29/29587.png",
                          }}
                          style={{
                            width: 100,
                            height: 100,
                            tintColor: "white",
                          }}
                        />
                      ) : (
                        <Image
                          source={{
                            uri: "https://cdn.icon-icons.com/icons2/1674/PNG/512/filetext_111171.png",
                          }}
                          style={{
                            width: 100,
                            height: 100,
                            tintColor: "white",
                          }}
                        />
                      )}
                      <Text style={styles.itemCodeFichier}>
                        {item.nomOriginal.length > 20
                          ? item.nomOriginal.slice(0, 20) +
                            "..." +
                            item.extension
                          : item.nomOriginal}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <View style={[styles.loadingContainer]}>
                  <Text>Pas de fichier partagé avec vous</Text>
                </View>
              ))}
              {selectedValue === "Upload" && (
                <TouchableOpacity style={styles.petitBouton} onPress={chooseFile}>
                  <Text style={styles.textePetitBouton}>Sélectionner un fichier</Text>
                </TouchableOpacity>
              )}
              {selectedValue === "Upload" && fileToUpload && (
                <View>
                  <Text style={styles.itemCodeFichier}>
                    {fileToUpload.assets[0].name}
                  </Text>
                  <TouchableOpacity style={styles.petitBouton} onPress={uploadFile}>
                      <Text style={styles.textePetitBouton}>Upload le fichier</Text>
                  </TouchableOpacity>
                </View>
              )}
          </>
        )}
      </View>
    </View>
  );
};
