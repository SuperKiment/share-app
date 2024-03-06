import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    margin: 15,    
  },
  blueContainer: {
    margin: 15, 
    backgroundColor: '#158CBA99', 
    borderRadius: 10,
  },
  ecart: {
    margin: 10,
  },
  header: {
    marginTop: 22,
    backgroundColor: '#158CBA',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  titre: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 25,
  },
  blueTitre: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    color: 'white',
    backgroundColor: '#158CBA',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 16,
  },
  image: {
    width: '100%', 
    height: 200, 
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 10,
  },
  gras: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  bouton: {
    backgroundColor: '#158CBA',
    padding: 16,
    borderRadius: 25,
    marginTop: 30,
  },
  texteBouton: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  BottomTabs:{
    backgroundColor: '#158CBA',
    color: 'white',
  },
  BottomTabs: {
    backgroundColor: '#158CBA',
  },
  tabText: {
    color: 'white', 
  },
  ProfilTexte: {
    fontSize: 22,
    marginBottom: 15,
    color: 'white',
  },
  mentions: {
    fontSize: 16,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 310,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 3, 
    tintColor: 'white',
  },
});

export default styles;
