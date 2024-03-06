import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import styles from "../Styles/styles";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfilScreen from "../screens/ProfilScreen";
import AboutScreen from "../screens/AboutScreen";
import MentionsLegales from "../screens/MentionsLegalesScreen";
import { useUser } from "./UserConnexion";
import ConnexionScreen from "../screens/ConnexionScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const { user } = useUser();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.BottomTabs,
          tabBarLabelStyle: styles.tabText,
        }}
      >
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
        {user != null ? (
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
    </NavigationContainer>
  );
}
