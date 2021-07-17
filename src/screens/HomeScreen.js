import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import globalStyle from "../components/style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>Home Screen</Text>
      <ProductList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
