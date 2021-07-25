import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { saveCartData, saveShippingAddress } from "./src/actions/cartActions";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./navigations/index";
import { saveUserData } from "./src/actions/userActions";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCartData();
    getUserData();
  }, []);

  const getCartData = async () => {
    try {
      const jsoncartItems = await AsyncStorage.getItem("cartItems");
      const cartItems =
        jsoncartItems != null ? JSON.parse(jsoncartItems) : null;

      const jsonShippingAddress = await AsyncStorage.getItem("shippingAddress");
      const shippingAddress =
        jsonShippingAddress != null ? JSON.parse(jsonShippingAddress) : null;
      // console.log("item from cart", cartItems);

      dispatch(saveCartData(cartItems));
      dispatch(saveShippingAddress(shippingAddress));
    } catch (e) {}
  };

  const getUserData = async () => {
    try {
      const jsonUserData = await AsyncStorage.getItem("userData");

      const userData =
        jsonUserData != null ? JSON.parse(jsonUserData).userInfo : null;
      dispatch(saveUserData(userData));
    } catch (e) {}
  };

  return (
    <>
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
