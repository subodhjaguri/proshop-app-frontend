import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import ProductScreen from "../src/screens/ProductScreen";
import CartScreen from "../src/screens/CartScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import ExampleScreen from "../src/screens/ExampleScreen";

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

      <HomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="ExampleScreen"
        component={ExampleScreen}
        options={HomeNavigatorOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
