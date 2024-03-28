import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../Styles/styles";
import Header from "../../components/Header";
import { useUser } from "../../components/UserConnexion";
import { nuage } from "../../config/config";

export const Modification = ({ navigation }) => {
  const AfficherModif = () => {
    const { user, updateUser } = useUser();
    [variable, setVariable] = useState(0);
    [firstname, setFirstname] = useState(user != null ? user.firstname : "");
    [lastname, setLastname] = useState(user != null ? user.lastname : "");
    const id = user != null ? user.id : 0;

    const updateProfil = async () => {
      try {
        if (id != "") {
          const data = await fetch(
            nuage + "api-updateuser?id=" +
              id +
              "&firstname=" +
              firstname +
              "&lastname=" +
              lastname
          );
          const dataJSON = await data.json();

          console.log(dataJSON);

          if (dataJSON.state == "success") {
            updateUser(JSON.parse(dataJSON.data));
            console.log("User profile updated successfully");
            navigation.goBack();
          } else {
            console.error("Failed to update user profile");
          }
        } else {
          console.log("pas d'id");
        }
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <>
        <View>
          <Text style={styles.blueTitre}>Modification du profil</Text>
          <Text style={{...styles.gras, ...styles.ProfilTexte}}>Nom</Text>
          <TextInput
            defaultValue={lastname}
            style={styles.ProfilTexte}
            onChangeText={setLastname}
          />
          <Text style={{...styles.gras, ...styles.ProfilTexte}}>Prénom</Text>
          <TextInput
            defaultValue={firstname}
            style={styles.ProfilTexte}
            onChangeText={setFirstname}
          />
        </View>

        <TouchableOpacity onPress={updateProfil} style={styles.bouton}>
          <Text style={styles.texteBouton}>Modifier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Annuler</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          <AfficherModif />
        </View>
      </View>
    </View>
  );
};
