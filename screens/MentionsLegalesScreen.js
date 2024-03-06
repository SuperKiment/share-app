import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default () => {
  const itemDimension = (Dimensions.get("window").width - 40) / 2 - 20;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <Text style={styles.headerText}>Mentions Légales</Text>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Informations relatives :</Text>
          <Text>
            <Text style={styles.h3Text}>Responsable de la publication : </Text>
            <Text style={styles.text}>
              Mme. BOUDRY, Mme. POTEAUX, M. PARISOT et M. BRUYE
            </Text>
          </Text>

          <Text>
            <Text style={styles.h3Text}>Adresse : </Text>
            <Text style={styles.text}>ARRAS</Text>
          </Text>

          <Text>
            <Text style={styles.h3Text}>Adresse e-mail : </Text>
            <Text style={styles.text}>share@contact.com</Text>
          </Text>

          <Text>
            <Text style={styles.h3Text}>Numéro de téléphone : </Text>
            <Text style={styles.text}>06 50 60 80 36</Text>
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Hébergement :</Text>
          <Text>
            <Text style={styles.h3Text}>Nom de l'hébergeur : </Text>
            <Text style={styles.text}>
              Mme. BOUDRY, Mme. POTEAUX, M. PARISOT et M. BRUYE
            </Text>
          </Text>

          <Text>
            <Text style={styles.h3Text}>Adresse : </Text>
            <Text style={styles.text}>ARRAS</Text>
          </Text>

          <Text>
            <Text style={styles.h3Text}>Numéro de téléphone : </Text>
            <Text style={styles.text}>06 50 60 80 36</Text>
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Protection des données personnelles</Text>
          <Text style={styles.text}>
            Nous, en tant que développeurs de l'application Share, nous
            engageons à respecter la confidentialité et la sécurité des données
            personnelles de nos utilisateurs. Les données personnelles
            collectées via l'application Share sont utilisées uniquement dans le
            but de fournir les services offerts par l'application et ne seront
            en aucun cas vendues ou cédées à des tiers.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Propriété intellectuelle</Text>
          <Text style={styles.text}>
            L'ensemble du contenu de l'application Share, y compris mais non
            limité aux textes, images, graphiques, logos, icônes, clips audio,
            clips vidéo, téléchargements numériques et compilations de données,
            est la propriété de Share et est protégé par les lois sur le droit
            d'auteur et autres lois applicables en matière de propriété
            intellectuelle.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Cookies</Text>
          <Text style={styles.text}>
            L'application Share peut utiliser des cookies pour améliorer
            l'expérience utilisateur. Les cookies sont de petits fichiers texte
            placés sur votre appareil pour aider l'application à analyser
            l'utilisation de celle-ci, à personnaliser votre expérience et à
            vous fournir des fonctionnalités améliorées.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Conditions d'utilisation</Text>
          <Text style={styles.text}>
            En utilisant l'application Share, vous acceptez de vous conformer
            aux conditions d'utilisation suivantes :
          </Text>
          <Text style={styles.text}>
            - Vous êtes seul responsable de l'exactitude, de l'intégralité et de
            la légalité des fichiers que vous partagez via l'application Share.
          </Text>
          <Text style={styles.text}>
            - Vous vous engagez à ne pas utiliser l'application Share à des fins
            illicites ou interdites par les présentes conditions.
          </Text>
          <Text style={styles.text}>
            - Nous nous réservons le droit de suspendre ou de résilier votre
            accès à l'application Share à tout moment, sans préavis, en cas de
            violation des présentes conditions.
          </Text>
          <Text style={styles.text}>
            - Nous ne sommes en aucun cas responsables des dommages directs,
            indirects, accessoires, spéciaux ou consécutifs résultant de
            l'utilisation ou de l'impossibilité d'utiliser l'application Share.
          </Text>
          <Text style={styles.text}>
            - Droit applicable et juridiction compétente.
          </Text>
          <Text style={styles.text}>
            Les présentes conditions d'utilisation sont régies par et
            interprétées conformément aux lois en vigueur en France. Tout litige
            découlant de l'utilisation de l'application Share sera soumis à la
            juridiction exclusive des tribunaux d'Arras.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.h2Text}>Contact</Text>
          <Text style={styles.text}>
            Pour toute question ou réclamation concernant l'application Share,
            veuillez nous contacter à l'adresse e-mail suivante :
            share@contact.com.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    margin: 20,
  },
  view: {
    marginTop: 20,
    marginBotton: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
  h2Text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  h3Text: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    textAlign: "justify",
    marginTop: 5,
    lineHeight: 25,
  },
});
