import { Button, Text, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useContext, useState } from "react";
import { nuage } from "../config/config";
import { UserContext } from "../components/UserConnexion";

export default ({ route, navigation }) => {
  const Formulaire = () => {
    const ancienMessage = route.params.message;
    const [titre, setTitre] = useState(ancienMessage.title);
    const [message, setMessage] = useState(ancienMessage.content);
    const { user } = useContext(UserContext);

    const modifierMessage = async () => {
      if (titre == "" || message == "") return;

      try {
        const data = await fetch(nuage + "api/messages/" + ancienMessage.id, {
          headers: {
            Accept: "application/ld+json",
            "Content-Type": "application/merge-patch+json",
            Authorization: `Bearer ${user.token}`,
          },
          method: "PATCH",
          body: JSON.stringify({
            title: titre,
            content: message,
          }),
        });

        const dataJSON = await data.json();
        console.log(dataJSON);

        if (dataJSON["@type"] == "hydra:Error") {
          alert(dataJSON["@type"] + dataJSON.detail);
        }

        if (dataJSON["@type"] == "Message") {
          alert("Succès !");
          navigation.goBack();
        }
      } catch (err) {
        alert(err);
      }
    };

    return (
      <View style={styles.messagesContainer}>
        <Text style={styles.messageElement}>Titre</Text>

        <TextInput
          value={titre}
          style={{
            ...styles.messageElement,
            borderColor: "white",
            borderWidth: 1,
            padding: 5,
          }}
          onChangeText={setTitre}
        />

        <Text style={styles.messageElement}>Contenu</Text>
        <TextInput
          value={message}
          multiline={true}
          numberOfLines={4}
          style={{
            ...styles.messageElement,
            borderColor: "white",
            borderWidth: 1,
            padding: 5,
          }}
          onChangeText={setMessage}
        />

        <Button title="Modifier" onPress={modifierMessage} />
      </View>
    );
  };

  return (
    <View style={[styles.body]}>
      <View style={[styles.blueContainer]}>
        <View style={styles.sujetContainer}>
          <Text style={[styles.sujetTitle, { marginBottom: 10 }]}>
            Modifier un message
          </Text>
        </View>

        <Formulaire />
      </View>
    </View>
  );
};
