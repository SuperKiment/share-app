import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Profil } from "./profilScreens/ProfilScreen";
import { Modification } from "./profilScreens/ModificationScreen";

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
          name="Modification"
          component={Modification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
