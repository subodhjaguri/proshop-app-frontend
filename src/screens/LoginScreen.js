import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import globalStyle from "../components/style";
import { Formik } from "formik";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { navigateTo } from "../../navigations/RootNavigation";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    // if (userInfo) {
    //   goBack();
    // }
  }, [userInfo]);
  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>LOGIN SCREEN</Text>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <View style={styles.form_container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(login(values.email, values.password));
          }}
        >
          {(props) => (
            <View>
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
              <Button title="Login" onPress={props.handleSubmit} />
              <View
                style={{
                  marginVertical: "10%",
                }}
              >
                <Text style={styles.feilds}>New User ?</Text>
                <Button
                  title="Register Here"
                  onPress={() => navigateTo("RegisterScreen")}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {
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
