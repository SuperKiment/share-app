import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import InscriptionScreen from "./connexionScreens/InscriptionScreen";
import ConnexionScreen from "./connexionScreens/ConnexionScreen";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Profil">
        <Stack.Screen
          name="Connexion"
          component={ConnexionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inscription"
          component={InscriptionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
