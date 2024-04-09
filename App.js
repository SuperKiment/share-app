import { StatusBar } from "expo-status-bar";
import { UserProvider } from "./components/UserConnexion";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import styles from "./Styles/styles";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MentionsLegalesScreen from "./screens/MentionsLegalesScreen";
import ProfilScreen from "./screens/ProfilScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { useUser } from "./components/UserConnexion";
import ConnexionScreen from "./screens/ConnexionNavScreen";
import FichiersScreen from "./screens/FichiersScreen";
import FichierScreen from "./screens/FichierScreen";
import PartagerScreen from "./screens/PartagerScreen";
import InscriptionScreen from "./screens/connexionScreens/InscriptionScreen";
// import UpdateProfilScreen from "./screens/UpdateProfilScreen";
import ForumScreen from "./screens/ForumScreen";
import MessageScreen from "./screens/MessageScreen";
import NewSujetScreen from "./screens/NewSujetScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const { user } = useUser();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.BottomTabs,
        tabBarLabelStyle: styles.tabText,
      }}
    >
      {user != null ? (
        <>
          <Tab.Screen
            name="Accueil"
            component={HomeScreen}
            options={{
              tabBarLabel: "Accueil",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={{
                    uri: "https://pngfre.com/wp-content/uploads/House-3.png",
                  }}
                  style={{ width: size, height: size, tintColor: "white" }}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Fichiers"
            component={FichiersScreen}
            options={{
              tabBarLabel: "Fichiers",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1674/PNG/512/filetext_111171.png",
                  }}
                  style={{ width: size, height: size, tintColor: "white" }}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Forum"
            component={ForumScreen}
            options={{
              tabBarLabel: "Forum",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/6456/6456117.png",
                  }}
                  style={{ width: size, height: size, tintColor: "white" }}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profil"
            component={ProfilScreen}
            options={{
              tabBarLabel: "Profil",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1747/PNG/512/profile_113589.png",
                  }}
                  style={{ width: size, height: size, tintColor: "white" }}
                />
              ),
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Connexion"
          component={ConnexionScreen}
          options={{
            tabBarLabel: "Connexion",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={{
                  uri: "https://cdn.icon-icons.com/icons2/1747/PNG/512/profile_113589.png",
                }}
                style={{ width: size, height: size, tintColor: "white" }}
              />
            ),
            headerShown: false,
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inscription"
            component={InscriptionScreen}
            options={{}}
          />
          <Stack.Screen
            name="A propos"
            component={AboutScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Fichier"
            component={FichierScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Forum"
            component={ForumScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Sujet"
            component={MessageScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Mentions Légales"
            component={MentionsLegalesScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Profil"
            component={ProfilScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="UpdateProfil"
            component={UpdateProfilScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Connexion"
            component={ConnexionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nouveau Sujet"
            component={NewSujetScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Partager"
            component={PartagerScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
