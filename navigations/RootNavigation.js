import * as React from "react";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

export function navigateTo(name, params) {
  navigationRef.current?.navigate(name, params);

  console.log("hello");
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}
