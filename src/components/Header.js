import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { navigateTo } from "../../navigations/RootNavigation";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";
import { logout } from "../actions/userActions";

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    setModalVisible(false);
  };

  const profileHandler = () => {
    navigateTo("ProfileScreen");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigateTo("HomeScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: RFPercentage(3) }}>
          Proshop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.header_buttons}
        onPress={() => navigateTo("CartScreen", { product: false, qty: 0 })}
      >
        <FontAwesome
          name="shopping-cart"
          size={24}
          color="black"
          style={{ marginRight: "6%" }}
        />
        <Text
          style={{
            fontSize: RFPercentage(1.9),
            fontWeight: "bold",
            marginLeft: "2%",
          }}
        >
          Cart
        </Text>
      </TouchableOpacity>
      {userInfo ? (
        <View style={styles.header_buttons}>
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            
          </Modal> */}
          <Modal
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalView}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", marginVertical: "1%" }}
                onPress={profileHandler}
              >
                <Feather name="user" size={24} color="black" />
                <Text
                  style={{
                    fontSize: RFPercentage(1.9),
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row", marginVertical: "1%" }}
                onPress={logoutHandler}
              >
                <MaterialCommunityIcons name="logout" size={24} color="black" />
                <Text
                  style={{
                    fontSize: RFPercentage(1.9),
                    fontWeight: "bold",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>

          <Pressable
            style={styles.header_buttons}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome
              style={{ marginRight: "6%" }}
              name="user"
              size={24}
              color="black"
            />
            <Text
              style={{
                fontSize: RFPercentage(1.9),
                fontWeight: "bold",
              }}
            >
              {userInfo.name}
            </Text>
          </Pressable>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.header_buttons}
          onPress={() => navigateTo("LoginScreen")}
        >
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="black"
            style={{ marginRight: "3%" }}
          />
          <Text
            style={{
              fontSize: RFPercentage(1.9),
              fontWeight: "bold",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: "5%",
    backgroundColor: "#ebebe0",
  },
  header_buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalView: {
    // width: "auto",
    margin: 10,
    backgroundColor: "#ebebe0",

    paddingHorizontal: "8%",
    paddingVertical: "1%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // shadowColor: "#000",

    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    position: "absolute",
    top: StatusBar.currentHeight,
    right: 0,
  },
});
