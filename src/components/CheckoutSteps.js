import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { navigateTo } from "../../navigations/RootNavigation";

export default function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: "2%",
        marginVertical: "5%",
      }}
    >
      {step1 ? (
        <Button
          style={{ marginHorizital: "2%" }}
          title="Sign in"
          onPress={() => navigateTo("LoginScreen")}
        />
      ) : (
        <Button style={{ marginHorizital: "2%" }} disabled title="Sign in" />
      )}
      {step2 ? (
        <Button
          style={{ marginHorizital: "2%" }}
          title="Shipping"
          onPress={() => navigateTo("ShippingScreen")}
        />
      ) : (
        <Button style={{ marginHorizital: "2%" }} disabled title="Shipping" />
      )}
      {step3 ? (
        <Button
          style={{ marginHorizital: "2%" }}
          title="Payment"
          onPress={() => navigateTo("PaymentScreen")}
        />
      ) : (
        <Button style={{ marginHorizital: "2%" }} disabled title="Payment" />
      )}
      {step4 ? (
        <Button
          style={{ marginHorizital: "2%" }}
          title="Place Order"
          onPress={() => navigateTo("PlaceOrderScreen")}
        />
      ) : (
        <Button
          style={{ marginHorizital: "2%" }}
          disabled
          title="Place Order"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
