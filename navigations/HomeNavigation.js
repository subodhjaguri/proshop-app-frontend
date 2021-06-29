import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import ProductScreen from "../src/screens/ProductScreen";
import CartScreen from "../src/screens/CartScreen";

const HomeNavigatorOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={HomeNavigatorOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
