import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../Styles/styles";
import { IRInuage, nuage } from "../config/config";
import { UserContext } from "../components/UserConnexion";

export default ({ route, navigation }) => {
  const { idSujet } = route.params;
  const [sujet, setSujet] = useState({});
  const [messages, setMessages] = useState([]);
  const [loadingM, setLoadingM] = useState(true);
  const [loadingS, setLoadingS] = useState(true);
  const { user, token } = useContext(UserContext);

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
      // console.log(dataJSON["hydra:member"][0].user["@id"]);
      // console.log(IRInuage + "api/users/" + user.id);
      setLoadingM(false);
    }
  };

  const SupprimerMessage = async (messageSupp) => {
    console.log("Suppression de", messageSupp);
    try {
      const data = await fetch(nuage + "api/messages/" + messageSupp.id, {
        headers: {
          Accept: "application/ld+json",
          "Content-Type": "application/merge-patch+json",
          Authorization: `Bearer ${user.token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
          id: messageSupp.id,
        }),
      });

      const dataJSON = await data.text();
      console.log(dataJSON);

      if (dataJSON["@type"] == "hydra:Error") {
        alert(dataJSON["@type"] + dataJSON.detail);
      }

      if (dataJSON["@type"] == "Message") {
        alert("Succès !");
      }

      if (messageSupp == sujet) {
        navigation.goBack();
      } else {
        getMessagesBySujet(idSujet);
      }
    } catch (e) {
      alert(e);
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
              {sujet.user["@id"] == IRInuage + "api/users/" + user.id ? (
                <>
                  <View>
                    <Text style={styles.messageElement}>Par vous</Text>

                    <View style={{ flexDirection: "row" }}>
                      <Button
                        title="Modifier"
                        onPress={() => {
                          navigation.navigate("ModifierMessage", {
                            message: sujet,
                          });
                        }}
                      />

                      <Button
                        title="Supprimer"
                        onPress={() => {
                          SupprimerMessage(sujet);
                        }}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <>
                  Par {sujet.user.lastname} {sujet.user.firstname}
                </>
              )}
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
                      {message.user["@id"] ==
                      IRInuage + "api/users/" + user.id ? (
                        <>
                          <View>
                            <Text style={styles.messageElement}>Par vous</Text>
                            <View style={{ flexDirection: "row" }}>
                              <Button
                                title="Modifier"
                                onPress={() => {
                                  navigation.navigate("ModifierMessage", {
                                    message: message,
                                  });
                                }}
                              />
                              <Button
                                title="Supprimer"
                                onPress={() => {
                                  SupprimerMessage(message);
                                }}
                              />
                            </View>
                          </View>
                        </>
                      ) : (
                        <>
                          Par {message.user.lastname} {message.user.firstname}
                        </>
                      )}
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
