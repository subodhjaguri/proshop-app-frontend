import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { saveCartData } from "./src/actions/cartActions";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./navigations/index";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsoncartItems = await AsyncStorage.getItem("cartItems");
      const cartItems =
        jsoncartItems != null ? JSON.parse(jsoncartItems) : null;
      console.log(cartItems);
      dispatch(saveCartData(cartItems));
    } catch (e) {}
  };

  return (
    <>
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
