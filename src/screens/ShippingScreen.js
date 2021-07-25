import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../navigations/RootNavigation";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Header from "../components/Header";
import globalStyle from "../components/style";
export default function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>SHIPPING SCREEN</Text>

      <CheckoutSteps step1 step2 />

      <View style={styles.form_container}>
        <Formik
          enableReinitialize
          initialValues={{
            address: shippingAddress.address,
            city: shippingAddress.city,
            postalCode: shippingAddress.postalCode,
            country: shippingAddress.country,
          }}
          onSubmit={(values) => {
            dispatch(saveShippingAddress(values));
            navigateTo("PaymentScreen");
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.feilds}>Address :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="Address"
                onChangeText={props.handleChange("address")}
                value={props.values.address}
              />
              <Text style={styles.feilds}>City :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="City"
                onChangeText={props.handleChange("city")}
                value={props.values.city}
              />
              <Text style={styles.feilds}>PostalCode :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="PostalCode"
                onChangeText={props.handleChange("postalCode")}
                value={props.values.postalCode}
              />
              <Text style={styles.feilds}>Country :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="Country"
                onChangeText={props.handleChange("country")}
                value={props.values.country}
              />
              <Button title="Confirm" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    width: "80%",
    justifyContent: "flex-start",
  },
  feilds: {
    marginBottom: "2%",
    fontWeight: "bold",
    fontSize: RFPercentage(2),
  },
  inputs: {
    paddingVertical: "1%",
    paddingHorizontal: "3%",
    borderColor: "grey",
    borderWidth: 0.5,
    marginBottom: "6%",
  },
});
