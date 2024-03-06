import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyTabs from "./components/Bottom-Tabs";
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
import ConnexionScreen from "./screens/ConnexionScreen";

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
          <Tab.Screen
            name="Paramètres"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Paramètres",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/60/60473.png",
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
            name="A propos"
            component={AboutScreen}
            options={{ headerShown: true }}
            style={{}}
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
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
