import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import { nuage } from "../config/config";
import { UserContext } from "../components/UserConnexion";

export default ({ navigation }) => {
  const [themes, setThemes] = useState([]);
  const { user, updateTheme } = useContext(UserContext);

  const getThemes = async () => {
    const data = await fetch(nuage + "api/themes?page=1");

    const dataJSON = await data.json();

    console.log(dataJSON["hydra:member"]);

    setThemes(dataJSON["hydra:member"]);
  };

  useEffect(() => {
    getThemes();
  }, []);

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.titre}>Choisir un Thème</Text>
        <Text style={styles.description}>
          Choisissez un thème pour filtrer les catégories
        </Text>

        <FlatList
          data={themes}
          renderItem={(item) => {
            console.log(item);
            return (
              <>
                <View style={{ margin: "10px" }}>
                  <Button
                    title={item.item.libelle}
                    onPress={() => {
                      updateTheme(item.item);
                      navigation.goBack();
                    }}
                  />
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};
