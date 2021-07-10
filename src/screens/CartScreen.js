import React from "react";
import { addToCart } from "../actions/cartActions";
import { StyleSheet, Text, View } from "react-native";
import globalStyle from "../components/style";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

export default function CartScreen({ route }) {
  let qty = route.params.qty;
  // const productId = route.params.id;
  const product = route.params.product;

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.heading}>CART SCREEN</Text>

      <CartItems product={product} qty={qty} />
    </View>
  );
}

const styles = StyleSheet.create({});
