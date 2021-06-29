import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_CART_DATA,
} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://192.168.0.104:5000/api/products/${id}`
  );
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  const jsonCartData = JSON.stringify(getState().cart.cartItems);
  await AsyncStorage.setItem("cartItems", jsonCartData);
};

export const saveCartData = (cartItems) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_CART_DATA,
    payload: {
      cartItems,
    },
  });
};

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   });
//   AsyncStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
// };
