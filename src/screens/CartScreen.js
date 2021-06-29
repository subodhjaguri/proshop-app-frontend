import React from "react";
import { addToCart } from "../actions/cartActions";
import { StyleSheet, Text, View } from "react-native";
import globalStyle from "../components/style";
import CartItems from "../components/CartItems";

export default function CartScreen({ route }) {
  let qty = route.params.qty;
  const productId = route.params.id;

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.heading}>CART SCREEN</Text>

      <CartItems productId={productId} qty={qty} />
    </View>
  );
}

const styles = StyleSheet.create({});
