import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Message({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("60%"),

    justifyContent: "center",
  },
  message: {
    fontSize: 25,
  },
  text: {
    marginTop: 5,
    fontSize: RFPercentage(2.1),
    fontWeight: "bold",
  },
});
