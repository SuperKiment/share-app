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
    [firstname, setFirstname] = useState(user.prenom);
    [lastname, setLastname] = useState(user.nom);
    const id = user != null ? user.id : 0;
    const token = user.token;

    const updateProfil = async () => {
      if (id !== "") {
        if (firstname !== "" && lastname !== "") {
          const response = await fetch(nuage + "api/users/" + id, {
            method: "PATCH",
            headers: {
              Accept: "application/ld+json",
              "Content-Type": "application/merge-patch+json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              firstname: firstname,
              lastname: lastname,
            }),
          });

          if (response.ok) {
            const updatedUserData = await response.json();
            const updatedUser = {
              email: updatedUserData.email,
              id: updatedUserData.id,
              nom: updatedUserData.lastname,
              prenom: updatedUserData.firstname,
              roles: updatedUserData.roles,
              token: user.token,
            };
            updateUser(updatedUser);
            // console.log("Profil utilisateur mis à jour avec succès");
            navigation.goBack();
          } else {
            console.error(
              "Échec de la mise à jour du profil utilisateur :",
              response.status,
              response.statusText
            );
          }
        } else {
          alert("Votre nom ou prénom ne peut pas être vide");
        }
      } else {
        // console.log("Pas d'ID utilisateur");
      }
    };

    return (
      <>
        <View>
          <Text style={styles.blueTitre}>Modification du profil</Text>
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>Nom</Text>
          <TextInput
            defaultValue={lastname}
            style={styles.ProfilTexte}
            onChangeText={setLastname}
          />
          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>Prénom</Text>
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
