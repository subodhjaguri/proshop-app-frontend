import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { saveCartData } from "./src/actions/cartActions";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./navigations/index";
import { saveUserInfo } from "./src/actions/userActions";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  const getData = async () => {
    try {
      const jsoncartItems = await AsyncStorage.getItem("cartItems");
      const cartItems =
        jsoncartItems != null ? JSON.parse(jsoncartItems) : null;
      console.log("item from cart", cartItems);
      dispatch(saveCartData(cartItems));
    } catch (e) {}
  };

  const getUserData = async () => {
    try {
      const jsonUserInfo = await AsyncStorage.getItem("userInfo");
      const userInfo = jsonUserInfo != null ? JSON.parse(jsonUserInfo) : null;
      console.log("userInfo", userInfo);
      // dispatch(saveUserInfo(userInfo));
    } catch (e) {}
  };

  return (
    <>
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
