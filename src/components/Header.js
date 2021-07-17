import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigateTo } from "../../navigations/RootNavigation";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Header() {
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
          style={{ marginHorizontal: "3%" }}
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
      <TouchableOpacity
        style={styles.header_buttons}
        onPress={() => navigateTo("LoginScreen")}
      >
        <MaterialCommunityIcons
          name="account"
          size={24}
          color="black"
          style={{ marginHorizontal: "3%" }}
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
});
