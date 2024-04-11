import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Profil } from "./profilScreens/ProfilScreen";
import { Modification } from "./profilScreens/ModificationScreen";
import { ModificationMotDePasse } from "./profilScreens/ModificationPassword";
import AboutScreen from "../screens/AboutScreen";
import MentionsLegalesScreen from "../screens/MentionsLegalesScreen";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Profil">
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A propos"
          component={AboutScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mentions Légales"
          component={MentionsLegalesScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Modification"
          component={Modification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModificationMDP"
          component={ModificationMotDePasse}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
