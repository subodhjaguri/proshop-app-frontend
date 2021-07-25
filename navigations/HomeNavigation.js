import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import ProductScreen from "../src/screens/ProductScreen";
import CartScreen from "../src/screens/CartScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import ShippingScreen from "../src/screens/ShippingScreen";
import PaymentScreen from "../src/screens/PaymentScreen";
import PlaceOrderScreen from "../src/screens/PlaceOrderScreen";

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
        name="ProfileScreen"
        component={ProfileScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="ShippingScreen"
        component={ShippingScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={HomeNavigatorOptions}
      />

      <HomeStack.Screen
        name="PlaceOrderScreen"
        component={PlaceOrderScreen}
        options={HomeNavigatorOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
