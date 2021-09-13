import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import globalStyle from "../components/style";
import Header from "../components/Header";
import { Formik } from "formik";
import { RFPercentage } from "react-native-responsive-fontsize";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { navigateTo } from "../../navigations/RootNavigation";
import { emptyCart } from "../actions/cartActions";

export default function StripePaymentScreen() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const total =
    cartItems.length != 0
      ? cartItems
          .reduce((acc, item) => acc + item.qty * item.price, 0)
          .toFixed(2)
      : 0;

  let amount = parseInt(total * 100, 10);
  const SubmitCard = async (card) => {
    Keyboard.dismiss();
    try {
      setLoading(true);
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://192.168.0.106:5000/payment",
        { card, amount },
        config
      );
      console.log(data);

      setLoading(false);
      dispatch(emptyCart());
      Alert.alert(
        "Payment Successfull",
        "SUCCESS",
        [
          {
            text: "GO to home ",
            onPress: () => navigateTo("HomeScreen"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      setLoading(false);

      console.log(error.message);
    }
  };

  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>STRIPE</Text>
      <View
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../components/PaymentImages/card.jpg")}
        />
        <Text
          style={{
            marginBottom: "2%",
            fontWeight: "bold",
            fontSize: RFPercentage(2.4),
          }}
        >
          INPUT YOUR CARD DETAILS
        </Text>
        <View style={styles.form_container}>
          <Formik
            enableReinitialize
            initialValues={
              {
                // card: "4242424242424242",
                // date: "02/21",
                // cvc: "123",
                // postalCode: "123456",
              }
            }
            onSubmit={(values) => {
              let month = parseInt(values.month, 10);
              let year = parseInt(values.year, 10);
              let card = {
                number: values.card,
                exp_month: month,
                exp_year: year,
                cvc: values.cvc,
              };
              SubmitCard(card);
              values.card = "";
              values.month = "";
              values.year = "";
              values.cvc = "";
            }}
          >
            {(props) => (
              <View>
                <Text style={styles.feilds}>Card Number :</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputs}
                  placeholder="Input your card number"
                  onChangeText={props.handleChange("card")}
                  value={props.values.card}
                />
                <Text style={styles.feilds}>Expiration date :</Text>
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.dateInputs}
                    placeholder="MM"
                    onChangeText={props.handleChange("month")}
                    value={props.values.month}
                  />
                  <TextInput
                    keyboardType="numeric"
                    style={styles.dateInputs}
                    placeholder="YY"
                    onChangeText={props.handleChange("year")}
                    value={props.values.year}
                  />
                </View>

                <Text style={styles.feilds}>CVC :</Text>
                <TextInput
                  keyboardType="numeric"
                  secureTextEntry={true}
                  style={styles.inputs}
                  placeholder="CVC"
                  onChangeText={props.handleChange("cvc")}
                  value={props.values.cvc}
                />
                {loading ? (
                  <Loader />
                ) : (
                  <Button title="Confirm" onPress={props.handleSubmit} />
                )}
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "21%",
    marginVertical: "5%",
  },
  form_container: {
    marginVertical: "5%",
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
    minHeight: 35,
  },
  dateInputs: {
    width: "50%",
    paddingVertical: "1%",
    paddingHorizontal: "3%",
    borderColor: "grey",
    borderWidth: 0.5,
    marginBottom: "6%",
    minHeight: 35,
  },
});
