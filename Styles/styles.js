import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
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

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#158CBA",
    paddingVertical: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
    marginTop: 20,
  },
  texteBouton: {
    color: "white",
    fontSize: 22,
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

  sujetTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },

  sujetElement: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  SousTitre: {
    fontSize: 18,
    color: "white",
  },

  mentions: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },

  contenuMessage: {
    display: "flex",
    flexDirection: "column",
  },

  message: {
    fontSize: 18,
    color: "white",
  },

  contenuSujet: {
    width: "70%",
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

  FlatList: {
    margin: 20,
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

  flex_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  messagesContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  messageContainer: {
    backgroundColor: "#4f879c",
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "flex-start",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
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
    marginBottom: 5,
  },

  categorieContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  sujetContainer: {
    margin: 20,
    borderBottomWidth: 5,
    color: "white",
    borderBottomColor: "white",
  },

  messageIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
    marginRight: 10,
  },

  messageContent: {
    flex: 1,
  },
  messageTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",

    marginBottom: 5,
  },
  messageElement: {
    fontSize: 14,
    color: "white",

    marginBottom: 5,
  },

  noMessagesContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  noMessagesText: {
    fontSize: 16,
  },

  TextInput: {
    borderColor: "white",
    borderWidth: 1,
    height: 50,
    padding: 10,
    color: "white",
    fontSize: 22,
    marginBottom: 20,
    borderRadius: 10,
  },

  minitexteBouton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  boutonAdd: {
    backgroundColor: "#158CBA",
    padding: 10,
    borderRadius: 25,
    marginRight: 20,
  },
});

export default styles;
