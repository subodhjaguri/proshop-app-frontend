import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Rating from "../components/Rating";
import globalStyle from "../components/style";

export default function ProductScreen({ route }) {
  const product = route.params;
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
        <View style={styles.product_summary}>
          <View style={styles.product_summary_rows}>
            <Text>Price</Text>
            <Text>{product.price}</Text>
          </View>
          <View style={styles.product_summary_rows}>
            <Text>Status</Text>
            <Text>
              {product.countInStock > 0 ? "In stock" : "Out of stock"}
            </Text>
          </View>
          <Button disabled={product.countInStock === 0} title="add to cart" />
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
});
