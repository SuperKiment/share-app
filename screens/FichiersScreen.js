import React, { useEffect, useState, createContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

import styles from "../Styles/styles";
import Header from "../components/Header";
import { useUser } from "../components/UserConnexion";
import { Picker } from "@react-native-picker/picker";
import { useFichiers } from "../components/FichiersConnexion";

export default ({ navigation }) => {
  [variable, setVariable] = useState(0);
  const itemDimension = (Dimensions.get("window").width - 60) / 3 - 20;
  const [selectedValue, setSelectedValue] = useState("MesFichiers");
  const { fichiers, setFichiers } = useFichiers();
  const { fichiersShared, setFichiersShared } = useFichiers();
  const { user } = useUser();

  const fetchData = async () => {
    const data = await fetch(
      "https://s4-8060.nuage-peda.fr/ShareMelanie/Share/public/api"
    );
    const dataJSON = await data.json();

    console.log(dataJSON);

    setVariable(dataJSON);
  };

  const getFichiersById = async () => {
    const data = await fetch(
      "https://s4-8057.nuage-peda.fr/share/api-getfichiers?proprietaire_id=" +
        user.id
    );
    const dataJSON = await data.json();
    //console.log(dataJSON);
    if (dataJSON.state == "success") {
      setFichiers(dataJSON.data);
    }
  };

  const getFichiersShared = async () => {
    const data = await fetch(
      "https://s4-8057.nuage-peda.fr/share/api-getfichiers?proprietaire_id=" +
        user.id
    );
    const dataJSON = await data.json();
    if (dataJSON.state == "success") {
      setFichiersShared(dataJSON.data);
    }
  };

  useEffect(() => {
    getFichiersById();
    getFichiersShared();
  }, []);

  return (
    <View style={styles.body}>
      <Header />
      <ScrollView style={styles.blueContainer}>
        <View style={styles.row}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>Fichiers</Text>
          </View>
        </View>

        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            console.log(itemValue);
          }}
          style={styles.picker}
        >
          <Picker.Item label="Mes fichiers" value="MesFichiers" />
          <Picker.Item label="Les partages" value="LesPartages" />
          <Picker.Item label="Upload" value="Upload" />
        </Picker>
        <View>
          {selectedValue == "MesFichiers" && (
            <FlatGrid
              itemDimension={itemDimension}
              data={fichiers}
              style={styles.gridView}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.itemContainerFichier, styles.shadowProp]}
                  onPress={() => {
                    navigation.navigate("Fichier", { idFichier: item.id });
                  }}
                >
                  {item.extension == "pdf" ? (
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/29/29587.png",
                      }}
                      style={{ width: 100, height: 100, tintColor: "white" }}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: "https://cdn.icon-icons.com/icons2/1674/PNG/512/filetext_111171.png",
                      }}
                      style={{ width: 100, height: 100, tintColor: "white" }}
                    />
                  )}
                  <Text style={styles.itemCodeFichier}>
                    {item.nom_original}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
          {selectedValue == "LesPartages" && (
            <FlatGrid
              itemDimension={itemDimension}
              data={fichiers}
              style={styles.gridView}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.itemContainerFichier, styles.shadowProp]}
                  onPress={() => {
                    navigation.navigate("Fichier", { idFichier: item.id });
                  }}
                >
                  <Text style={styles.itemCodeFichier}>
                    {item.nom_original}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
