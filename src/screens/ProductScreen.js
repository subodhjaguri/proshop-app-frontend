import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { navigateTo } from "../../navigations/RootNavigation";
import Rating from "../components/Rating";
import globalStyle from "../components/style";

export default function ProductScreen({ route }) {
  const [qty, setQty] = useState(1);
  const product = route.params.item;

  const addToCartHandler = () => {
    navigateTo("CartScreen", {
      product: product,
      // id: product._id,
      qty: qty,
    });
  };

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.heading}>Product Screen</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: product?.image,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.product_rating}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
          {/* <Text style={styles.price}>${product.price}</Text> */}
        </View>

        <View style={styles.product_description}>
          <Text style={styles.description_title}>Description :</Text>
          <Text>{product.description}</Text>
        </View>

        {product.countInStock === 0 ? null : (
          <View style={styles.quantity_container}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Quantity :
            </Text>
            <View style={styles.product_quantity}>
              <Button
                onPress={() => setQty(qty - 1)}
                disabled={qty === 1}
                title="-"
              />
              <Text
                style={{
                  width: "25%",
                  alignSelf: "center",

                  textAlign: "center",
                }}
              >
                {qty}
              </Text>
              <Button
                onPress={() => setQty(qty + 1)}
                disabled={product.countInStock - qty <= 0}
                title="+"
              />
            </View>
          </View>
        )}

        <View style={styles.product_summary}>
          <View style={styles.product_summary_rows}>
            <Text>Price</Text>
            <Text>{product.price}</Text>
          </View>
          <View style={styles.product_summary_rows}>
            <Text>Status</Text>
            <Text>
              {product.countInStock - qty > 0 ? "In stock" : "Out of stock"}
            </Text>
          </View>
          <View style={styles.product_summary_rows}>
            <Text>Quantity</Text>
            <Text>{product.countInStock > 0 ? qty : 0}</Text>
          </View>
          <Button
            onPress={addToCartHandler}
            disabled={product.countInStock === 0}
            title="add to cart"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginVertical: 5,
    paddingLeft: "10%",
    fontWeight: "bold",
  },
  image: {
    height: "35%",
    width: "80%",
    alignSelf: "center",
  },

  product_rating: {
    width: "100%",
    paddingHorizontal: "10%",
  },
  product_description: {
    paddingHorizontal: "10%",
  },
  description_title: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginVertical: 5,

    fontWeight: "bold",
  },
  product_summary: {
    width: "80%",

    marginVertical: "15%",
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
  },
  product_summary_rows: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 5,
    justifyContent: "space-around",
  },
  quantity_container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  product_quantity: {
    flexDirection: "row",
    marginVertical: "5%",
    justifyContent: "flex-end",
  },
});
