import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";

import { FlatGrid } from "react-native-super-grid";

import styles from "../Styles/styles";
import Header from "../components/Header";
import { useUser } from "../components/UserConnexion";

export default ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages();
    setLoading(false);
  }, []);

  const getMessages = async () => {
    const data = await fetch(
      "https://s4-8057.nuage-peda.fr/share/api/messages?exists%5Bparent%5D=false"
    );

    const dataJSON = await data.json();
    if (dataJSON["hydra:totalItems"] > 0) {
      setMessages(dataJSON["hydra:member"]);
    }
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.row}>
          <View style={styles.ecart}>
            <Text style={styles.blueTitre}>Forum</Text>
          </View>
        </View>
        {loading ? (
          <View style={styles.body}>
            <Text>Chargement en cours...</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={messages}
              style={styles.FlatList}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.itemContainerFichier,
                    styles.shadowProp,
                    styles.flex_row,
                  ]}
                  onPress={() => {
                    navigation.navigate("Sujet", {
                      idSujet: item.id,
                    });
                  }}
                >
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/6456/6456117.png",
                    }}
                    style={{
                      tintColor: "white",
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={styles.contenuSujet}>
                    <Text style={styles.sujetTitle}>{item.title}</Text>
                    <Text style={styles.SousTitre}>
                      {new Date(item.datePost).toLocaleTimeString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};
