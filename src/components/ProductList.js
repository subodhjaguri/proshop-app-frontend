import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

export default function ProductList({ navigation }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.products}>
      <TouchableOpacity
        style={styles.product}
        onPress={() => navigation.navigate("ProductScreen", item)}
      >
        <Image
          style={styles.product_image}
          source={{
            uri: item?.image,
          }}
        />
        <View style={styles.product_name}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <Rating value={item.rating} text={`${item.numReviews} Reviews`} />
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <FlatList
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",

    // padding: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 45,
  },
  products: {
    margin: 20,
    width: "40%",
    // height: "auto",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    backgroundColor: "#F5F5F5",
  },
  product: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  product_image: {
    padding: 5,
    width: "100%",
    height: 120,
  },
  product_name: {
    padding: 5,
    marginTop: 3,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    fontSize: 12,

    borderWidth: 1,
    // padding: 2,
    // width: "100%",
  },
  price: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
});
