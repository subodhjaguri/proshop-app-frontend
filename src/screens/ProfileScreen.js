import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import globalStyle from "../components/style";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { navigateTo } from "../../navigations/RootNavigation";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen() {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // console.log("userinfoo", userInfo);
  const { error, loading, user } = userDetails;

  console.log("userdata", user);

  useEffect(() => {
    if (!userInfo) {
      navigateTo("LoginScreen");
    } else {
      if (user.name != userInfo.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      }
    }
  }, [dispatch, userInfo, user]);

  return (
    <View style={globalStyle.container}>
      <Header />
      <Text style={globalStyle.heading}>USER PROFILE</Text>
      {message && <Message variant="danger">{message}</Message>}
      {success && <Message variant="success">Profile updated</Message>}
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <View style={styles.form_container}>
        <Formik
          enableReinitialize
          initialValues={{
            email: user.email,
            name: user.name,
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            if (values.password != values.confirmPassword) {
              setMessage("Passwords do not match");
            } else {
              dispatch(
                updateUserProfile({
                  id: user._id,
                  name: values.name,
                  email: values.email,
                  password: values.password,
                })
              );
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
              <Button title="Update" onPress={props.handleSubmit} />
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
