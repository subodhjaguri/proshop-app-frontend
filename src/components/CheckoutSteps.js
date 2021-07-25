import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigateTo } from "../../navigations/RootNavigation";

export default function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <View
      style={{
        flexDirection: "row",
        // justifyContent: "space-between",
        paddingHorizontal: "2%",
        marginVertical: "5%",
      }}
    >
      {step1 ? (
        <TouchableOpacity
          style={{ marginHorizontal: "2%" }}
          onPress={() => navigateTo("LoginScreen")}
        >
          <Text style={{ fontWeight: "bold" }}>Sign In </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ marginHorizontal: "2%" }} disabled>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Sign In</Text>
        </TouchableOpacity>
      )}
      {step2 ? (
        <TouchableOpacity
          style={{ marginHorizontal: "2%" }}
          onPress={() => navigateTo("ShippingScreen")}
        >
          <Text style={{ fontWeight: "bold" }}>Shipping </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ marginHorizontal: "2%" }} disabled>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Shipping</Text>
        </TouchableOpacity>
      )}

      {step3 ? (
        <TouchableOpacity
          style={{ marginHorizontal: "2%" }}
          onPress={() => navigateTo("PaymentScreen")}
        >
          <Text style={{ fontWeight: "bold" }}>Payment </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ marginHorizontal: "2%" }} disabled>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Payment</Text>
        </TouchableOpacity>
      )}
      {step4 ? (
        <TouchableOpacity
          style={{ marginHorizontal: "2%" }}
          onPress={() => navigateTo("PaymentScreen")}
        >
          <Text style={{ fontWeight: "bold" }}>PlaceOrder </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ marginHorizontal: "2%" }} disabled>
          <Text style={{ fontWeight: "bold", color: "grey" }}>PlaceOrder</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
