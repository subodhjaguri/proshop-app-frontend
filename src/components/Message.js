import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { clearErrors } from "../actions/userActions";
export default function Message({ children, variant }) {
  const dispatch = useDispatch();

  const background = variant === "danger" ? "#ffcccc" : "#ccffb3";
  let border = variant === "danger" ? "red" : "green";
  let color = variant === "danger" ? "red" : "green";
  let textStyle = {
    marginTop: 5,
    fontSize: RFPercentage(2.1),
    fontWeight: "bold",
    borderColor: border,
    borderWidth: 0.5,
    color: color,
    backgroundColor: background,
    padding: "2%",
  };

  return (
    <View style={styles.container}>
      {true && <Text style={textStyle}>{children}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    // height: hp("60%"),
    marginVertical: "2%",
  },

  text: {},
});
