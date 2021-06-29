import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import HomeNavigation from "./HomeNavigation";

//Options
const AppNavigatorOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={AppNavigatorOptions}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AppNavigator;
