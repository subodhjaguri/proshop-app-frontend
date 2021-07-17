import { StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const globalStyle = {
  container: {
    width: wp("100%"),
    height: hp("100%"),
    alignItems: "center",
    marginTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
};

export default globalStyle;
