import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Rating({ value, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        <FontAwesome
          name={value >= 1 ? "star" : value >= 0.5 ? "star-half" : "star-o"}
          size={12}
          color="#ff9900"
        />
        <FontAwesome
          name={value >= 2 ? "star" : value >= 1.5 ? "star-half" : "star-o"}
          size={12}
          color="#ff9900"
        />
        <FontAwesome
          name={value >= 3 ? "star" : value >= 2.5 ? "star-half" : "star-o"}
          size={12}
          color="#ff9900"
        />
        <FontAwesome
          name={value >= 4 ? "star" : value >= 3.5 ? "star-half" : "star-o"}
          size={12}
          color="#ff9900"
        />
        <FontAwesome
          name={value >= 5 ? "star" : value >= 4.5 ? "star-half" : "star-o"}
          size={12}
          color="#ff9900"
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
  },
  stars: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "10%",
  },
});
