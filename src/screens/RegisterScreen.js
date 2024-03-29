import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import globalStyle from "../components/style";
import { Formik } from "formik";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../navigations/RootNavigation";
import { register } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

export default function RegisterScreen() {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>REGISTER SCREEN</Text>
      {message && <Message variant="danger">{message}</Message>}
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <View style={styles.form_container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            if (values.password != values.confirmPassword) {
              setMessage("Passwords do not match");
            } else if (
              values.name === "" ||
              values.email === "" ||
              values.password === ""
            ) {
              setMessage("Feilds are empty");
            } else {
              dispatch(register(values.name, values.email, values.password));
            }
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.feilds}>Name :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="Name"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <Text style={styles.feilds}>Email address :</Text>
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <Text style={styles.feilds}>Password :</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputs}
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <Text style={styles.feilds}>Confirm Password :</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputs}
                placeholder="Confirm Password"
                onChangeText={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />
              <Button title="Register" onPress={props.handleSubmit} />
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
