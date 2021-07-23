import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import globalStyle from "./style";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { navigateTo } from "../../navigations/RootNavigation";

export default function CartItems({ qty, product }) {
  // const qty = route.params.qty;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const total =
    cartItems.length != 0
      ? cartItems
          .reduce((acc, item) => acc + item.qty * item.price, 0)
          .toFixed(2)
      : 0;
  //   console.log("items from cart", cartItems);

  useEffect(() => {
    if (product) {
      dispatch(addToCart(qty, product));
    }
  }, [dispatch, product, qty]);

  const placeOrderHandler = () => {
    if (userInfo) {
      navigateTo("ShippingScreen");
    } else {
      navigateTo("LoginScreen");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item_container}>
      <View style={styles.info}>
        <Image
          style={styles.product_image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.product_details}>
          <Text style={styles.text}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>$ {item.price}</Text>
            <View style={styles.product_quantity}>
              <Button
                onPress={() => dispatch(addToCart(item.qty - 1, item.product))}
                disabled={item.qty === 1}
                title="-"
              />
              <Text
                style={{
                  width: "25%",
                  alignSelf: "center",
                  textAlign: "center",
                }}
              >
                {item.qty}
              </Text>
              <Button
                onPress={() => dispatch(addToCart(item.qty + 1, item.product))}
                disabled={item.countInStock - item.qty <= 0}
                title="+"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <View style={{ width: "45%" }}>
          <Button
            //   onPress={console.log("clicked")}
            title="save for later"
          />
        </View>
        <View style={{ width: "45%" }}>
          <Button
            onPress={() => dispatch(removeFromCart(item.id))}
            title="remove"
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {cartItems.length != 0 && (
        <View style={styles.price_details}>
          <Text
            style={{
              fontSize: RFPercentage(2.1),
              fontWeight: "bold",
              color: "grey",
              margin: "3%",
              borderBottomColor: "grey",
              borderBottomWidth: 1,
            }}
          >
            PRICE DETAILS (
            {cartItems.length != 0
              ? cartItems.reduce((acc, item) => acc + item.qty, 0)
              : 0}
            items)
          </Text>
          <View style={styles.price_description}>
            <Text> Delivery charges </Text>
            <Text style={{ color: "green" }}>FREE</Text>
          </View>
          <View style={styles.price_description}>
            <Text> Total amount </Text>
            <Text>{total} </Text>
          </View>
          <View style={styles.place_order}>
            <Text>{total}</Text>
            <View>
              <Button title="Place Order" onPress={placeOrderHandler} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("90%"),
  },
  item_container: {
    width: widthPercentageToDP("90%"),
    marginVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    elevation: 4,
    backgroundColor: "#F5F5F5",
  },
  info: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  product_image: {
    padding: 5,
    width: "38%",
    height: 80,
  },
  product_details: {
    width: "58%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontSize: RFPercentage(1.82),
    fontWeight: "bold",
  },
  product_quantity: {
    flexDirection: "row",
    marginVertical: "5%",
    justifyContent: "center",
  },
  price_details: {
    margin: "3%",
    marginVertical: 5,
  },
  price_description: {
    flexDirection: "row",
    paddingVertical: "0.1%",
    justifyContent: "space-between",
    marginHorizontal: "3%",
    marginVertical: "0.3%",
  },
  place_order: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    elevation: 5,
    backgroundColor: "#F5F5F5",
    marginTop: "5%",
  },
  empty_cart: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
