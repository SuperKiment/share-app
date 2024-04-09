import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, FlatList, Image } from "react-native";
import styles from "../Styles/styles";
import { nuage } from "../config/config";

export default ({ route }) => {
  const { idSujet } = route.params;
  const [sujet, setSujet] = useState({});
  const [messages, setMessages] = useState([]);
  const [loadingM, setLoadingM] = useState(true);
  const [loadingS, setLoadingS] = useState(true);

  useEffect(() => {
    getSujet(idSujet);
    getMessagesBySujet(idSujet);
  }, []);

  const getSujet = async (idSujet) => {
    const data = await fetch(nuage + "api/messages/" + idSujet);
    const dataJSON = await data.json();
    setSujet(dataJSON);
    setLoadingS(false);
  };

  const getMessagesBySujet = async (idSujet) => {
    const data = await fetch(nuage + "api/messages?parent=" + idSujet);
    const dataJSON = await data.json();
    if (dataJSON["hydra:totalItems"] > 0) {
      setMessages(dataJSON["hydra:member"]);
      setLoadingM(false);
    }
  };

  return (
    <View style={[styles.body]}>
      {loadingS ? (
        <View style={[styles.loadingContainer]}>
          <Text>Chargement en cours...</Text>
        </View>
      ) : (
        <ScrollView style={[styles.blueContainer]}>
          <View style={styles.sujetContainer}>
            <Text style={[styles.sujetTitle, { marginBottom: 10 }]}>
              {sujet.title}
            </Text>
            <Text style={styles.sujetElement}>{sujet.content}</Text>
            <Text style={styles.sujetElement}>
              {new Date(sujet.datePost).toLocaleTimeString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text style={styles.sujetElement}>
              Par {sujet.user.lastname} {sujet.user.firstname}
            </Text>
          </View>

          <View style={styles.messagesContainer}>
            {!loadingM ? (
              messages.map((message, index) => (
                <View key={index} style={styles.messageContainer}>
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/6456/6456117.png",
                    }}
                    style={styles.messageIcon}
                  />
                  <View style={styles.messageContent}>
                    <Text style={styles.messageTitle}>{message.title}</Text>
                    <Text style={styles.messageElement}>{message.content}</Text>
                    <Text style={styles.messageElement}>
                      Par {message.user.lastname} {message.user.firstname}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.noMessagesContainer}>
                <Text style={styles.noMessagesText}>Aucun message trouvé.</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
