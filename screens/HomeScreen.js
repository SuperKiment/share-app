import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Header from "../components/Header";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default () => {
  const [downloaded, setDownloaded] = useState(null);

  const downloadAndSaveFile = () => {
    const downloadUri = "https://s4-8058.nuage-peda.fr/share-melanie/Share/uploads/fichiers/";
  
    fetch(`https://s4-8058.nuage-peda.fr/share-melanie/Share/public/api-getcheminfichier?id=${id}`)
      .then(response => response.json())
      .then(data => {
        const fileUri = data.data.nom_serveur;
        const downloadUrl = downloadUri + fileUri;
        console.log(downloadUrl);
        const destinationUri = `${FileSystem.cacheDirectory}file.jpg`;
  
        return FileSystem.downloadAsync(downloadUrl, destinationUri);
      })
      .then(({ uri }) => {
        console.log('File downloaded to:', uri);
        setDownloaded(true);
        return Sharing.shareAsync(uri);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Download File Example</Text>
      <TouchableOpacity onPress={getFichiersById}>
        <Text>Download File</Text>
      </TouchableOpacity>
      
      {downloaded && (
        <Text>
          Téléchargé!
        </Text>
      )}
    </View>
  );
}