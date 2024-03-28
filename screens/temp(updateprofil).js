import { useEffect, useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import styles from "../Styles/styles";
import { useUser } from "../components/UserConnexion";

export default ({ navigation }) => {
  const { user, updateUser } = useUser();
  [firstname, setFirstname] = useState(user != null ? user.firstname : "");
  [lastname, setLastname] = useState(user != null ? user.lastname : "");
  const id = user != null ? user.id : 0;

  const updateProfil = async () => {
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
      } else {
        console.error("Failed to update user profile");
      }
    }

    navigation.navigate("Profil");
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.titre}>Modification du profil</Text>
        <Text style={styles.description}>Nom</Text>
        <TextInput
          value={lastname}
          style={{ padding: 10 }}
          onChangeText={setLastname}
        />
        <Text style={styles.description}>Prénom</Text>
        <TextInput
          value={firstname}
          style={{ padding: 10 }}
          onChangeText={setFirstname}
        />
        {/* <Button 
        style={styles.bouton}
          title="Modifier"
          onPress={() => {
            updateProfil();
          }}
        /> */}
        <TouchableOpacity onPress={updateProfil} style={styles.bouton}>
          <Text style={styles.texteBouton}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profil")}
          style={styles.bouton}
        >
          <Text style={styles.texteBouton}>Annuler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
