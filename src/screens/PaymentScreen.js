import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../navigations/RootNavigation";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Header from "../components/Header";
import globalStyle from "../components/style";
import RadioButtonRN from "radio-buttons-react-native";

export default function PaymentScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigateTo("ShippingScreen");
  }
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const data = [
    {
      label: "Paypal",
    },
    {
      label: "Debit/Credit Card",
    },
    {
      label: "Stripe",
    },
  ];

  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>PAYMENT SCREEN</Text>
      <CheckoutSteps step1 step2 step3 />
      <Text style={styles.feilds}>Payment Method :</Text>
      <View style={styles.payment_select}>
        <RadioButtonRN
          circleSize={10}
          style={styles.radioButton}
          data={data}
          selectedBtn={(e) => setPaymentMethod(e.label)}
        />
        {paymentMethod === "Paypal" ? (
          <Image
            style={styles.image}
            source={require("../components/PaymentImages/paypal.png")}
          />
        ) : paymentMethod === "Debit/Credit Card" ? (
          <Image
            style={styles.image}
            source={require("../components/PaymentImages/debit.png")}
          />
        ) : (
          <Image
            style={styles.image}
            source={require("../components/PaymentImages/stripe.png")}
          />
        )}
      </View>
      <View style={{ width: "60%", marginVertical: "5%" }}>
        <Button
          title="Proceed"
          onPress={() => navigateTo("StripePaymentScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feilds: {
    marginBottom: "2%",
    fontWeight: "bold",
    fontSize: RFPercentage(2),
    alignSelf: "flex-start",
    marginLeft: "4%",
  },
  inputs: {
    paddingVertical: "1%",
    paddingHorizontal: "3%",
    borderColor: "grey",
    borderWidth: 0.5,
    marginBottom: "6%",
  },
  radioButton: {
    width: "40%",
    alignSelf: "flex-start",
  },
  payment_select: {
    paddingHorizontal: "4%",
    flexDirection: "row",

    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "55%",
    height: 100,
  },
});
