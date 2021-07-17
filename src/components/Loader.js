import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Loader({ message }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={{ padding: 20 }} size={"large"} color="black" />
      <Text style={styles.text}>{message} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: hp("60%"),

    justifyContent: "center",
  },
  text: {
    marginTop: 5,
    fontSize: RFPercentage(2.1),
    fontWeight: "bold",
  },
});
