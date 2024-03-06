import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import MentionsLegales from "../screens/MentionsLegalesScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="A propos de nous" component={AboutScreen} />
        <Tab.Screen name="Mentions Légales" component={MentionsLegales} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
