import React from "react";
import { addToCart } from "../actions/cartActions";
import { Button, StyleSheet, Text, View } from "react-native";
import globalStyle from "../components/style";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { RFPercentage } from "react-native-responsive-fontsize";
import { navigateTo } from "../../navigations/RootNavigation";

export default function CartScreen({ route }) {
  let qty = route.params.qty;
  // const productId = route.params.id;
  const product = route.params.product;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>CART SCREEN</Text>
      {cartItems.length == 0 && (
        <View style={styles.empty_cart}>
          <Text
            style={{
              fontSize: RFPercentage(3),
              color: "black",
              marginVertical: 5,
            }}
          >
            Your cart is empty
          </Text>
          <Button title="GO TO HOME" onPress={() => navigateTo("HomeScreen")} />
        </View>
      )}
      <CartItems product={product} qty={qty} />
    </View>
  );
}

const styles = StyleSheet.create({
  empty_cart: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
