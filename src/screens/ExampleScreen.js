import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import globalStyle from "../components/style";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function ExampleScreen() {
  const [dim, setDim] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(
      "https://stage-ppth.homeatz.sg/storage/dishes/1617940495.jpg",
      (width, height) => {
        // console.log(width, height);
        setDim({ width, height });
      }
    );
  }, []);
  console.log(dim);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.heading}>EXAMPLE SCREEN</Text>
      <View style={styles.container}>
        <Text>Category</Text>
        <View style={styles.product_container}>
          <View style={styles.product}>
            <Image
              style={{
                padding: 5,
                width: "100%",
                height: heightPercentageToDP(
                  (100 / dim.width) * dim.height + "%"
                ),
                alignSelf: "center",
                marginBottom: "2%",
                resizeMode: "contain",
              }}
              source={{
                uri: "https://stage-ppth.homeatz.sg/storage/dishes/1617940495.jpg",
              }}
            />
            <Text>dlskci jmehoicm cjekpoem kjeoie</Text>
          </View>
          <View style={styles.product}>
            <Image
              style={{
                padding: 5,
                width: "100%",
                height: heightPercentageToDP(
                  (100 / dim.width) * dim.height + "%"
                ),
                alignSelf: "center",
                marginBottom: "2%",
                resizeMode: "contain",
              }}
              source={{
                uri: "https://stage-ppth.homeatz.sg/storage/dishes/1619534237.jpg",
              }}
            />
            <Text>
              dlskci jmehoicm shdhweoi sdjs cwcw jwdiwn cjekpoem kjeoie
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "5%",
    // backgroundColor: "yellow",
  },
  product_container: {
    marginVertical: "3%",
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: "1%",
    alignItems: "center",
  },
  product: {
    width: "48%",
    borderColor: "red",
    borderWidth: 1,
  },
  product_image: {},
});
