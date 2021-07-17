import {
  CLEAR_ERRORS,
  SAVE_USER_DATA,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import { navigateTo } from "../../navigations/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://192.168.0.107:5000/api/users/login",
      { email, password },
      config
    );
    console.log("logged in ", data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    const jsonUserInfo = JSON.stringify(getState().userLogin);
    await AsyncStorage.setItem("userInfo", jsonUserInfo);
    navigateTo("HomeScreen");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERRORS,
      });
    }, 1000);
  }
};

export const saveUserInfo = (userInfo) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_USER_DATA,
    payload: {
      userInfo,
    },
  });
};
