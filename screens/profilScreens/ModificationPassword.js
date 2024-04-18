import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../Styles/styles";
import Header from "../../components/Header";
import { useUser } from "../../components/UserConnexion";
import { nuage } from "../../config/config";

export const ModificationMotDePasse = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { user } = useUser();
  const id = user.id;
  const token = user.token;

  const updatePassword = async () => {
    if (newPassword === confirmNewPassword) {
      if (id !== "") {
        const response = await fetch(nuage + "api/users/" + id, {
          method: "PATCH",
          headers: {
            Accept: "application/ld+json",
            "Content-Type": "application/merge-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: newPassword,
          }),
        });

        if (response.ok) {
          navigation.goBack();
        } else {
          console.error(
            "Échec de la mise à jour du mot de passe:",
            response.status,
            response.statusText
          );
        }
      }
    } else {
      alert("Les nouveaux mots de passe ne correspondent pas");
    }
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.blueContainer}>
        <View style={styles.ecart}>
          <Text style={styles.blueTitre}>Modification du mot de passe</Text>

          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
            Nouveau mot de passe
          </Text>
          <TextInput
            style={styles.ProfilTexte}
            secureTextEntry={true}
            onChangeText={setNewPassword}
            value={newPassword}
          />

          <Text style={{ ...styles.gras, ...styles.ProfilTexte }}>
            Confirmer le nouveau mot de passe
          </Text>
          <TextInput
            style={styles.ProfilTexte}
            secureTextEntry={true}
            onChangeText={setConfirmNewPassword}
            value={confirmNewPassword}
          />

          <TouchableOpacity onPress={updatePassword} style={styles.bouton}>
            <Text style={styles.texteBouton}>Modifier le mot de passe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.bouton}
          >
            <Text style={styles.texteBouton}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
