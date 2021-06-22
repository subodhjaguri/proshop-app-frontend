import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/store";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <View style={styles.container}> 
    </View> */}
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 10,
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
  },
});
