import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { Provider } from "react-redux";
import store from "./src/store";
import Main from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigations/RootNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Main />
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
