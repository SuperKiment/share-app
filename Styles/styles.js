import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 20,
  },
  container: {
    margin: 15,
    flex: 1,
  },
  blueContainer: {
    margin: 15,
    backgroundColor: "#158CBA99",
    borderRadius: 10,
    flex: 1,
  },
  ecart: {
    margin: 10,
  },
  header: {
    backgroundColor: "#158CBA",
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  titre: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 25,
  },
  blueTitre: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    color: "white",
    backgroundColor: "#158CBA",
    borderRadius: 45,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 10,
  },
  gras: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  bouton: {
    backgroundColor: "#158CBA",
    padding: 16,
    borderRadius: 25,
    marginTop: 40,
  },
  texteBouton: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  petitBouton: {
    backgroundColor: "#158CBA",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  textePetitBouton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  BottomTabs: {
    backgroundColor: "#158CBA",
    color: "white",
  },
  BottomTabs: {
    backgroundColor: "#158CBA",
  },
  tabText: {
    color: "white",
  },
  ProfilTexte: {
    fontSize: 22,
    marginBottom: 15,
    color: "white",
  },
  PersonneTexte: {
    fontSize: 22,
    color: "white",
  },
  Margin: {
    margin: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  mentions: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 150,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: 5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 3,
    tintColor: "white",
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },

  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  view: {
    marginTop: 20,
    marginBotton: 20,
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

  itemContainerFichier: {
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#158CBA",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  itemCodeFichier: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
    margin: 5,
  },

  shadowProp: {
    elevation: 1,
    shadowColor: "#52006A",
  },

  picker: {
    backgroundColor: "#158CBA",
    padding: 16,
    marginLeft: 40,
    marginRight: 40,
    color: "white",
  },

  picker2: {
    backgroundColor: "#158CBA",
    padding: 16,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    color: "white",
  },

  gridViewFichiers: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },

  catItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Espacement entre chaque élément de catégorie
  },

  categorieContainer: {
    alignItems: "center", // Centrer horizontalement
    justifyContent: "center", // Centrer verticalement
  },
});

export default styles;
