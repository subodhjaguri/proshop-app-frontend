import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductList from "../components/ProductList";
import globalStyle from "../components/style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.heading}>Home Screen</Text>
      <ProductList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
