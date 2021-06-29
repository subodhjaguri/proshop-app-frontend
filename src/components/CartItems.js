import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import globalStyle from "./style";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { addToCart } from "../actions/cartActions";

export default function CartItems({ productId, qty }) {
  // const qty = route.params.qty;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  //   console.log("items from cart", cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

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
                onPress={() => dispatch(addToCart(item.product, item.qty - 1))}
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
                onPress={() => dispatch(addToCart(item.product, item.qty + 1))}
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
            //    onPress={console.log("clicked")}
            title="remove"
          />
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product}
      />

      <View style={styles.price_details}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
