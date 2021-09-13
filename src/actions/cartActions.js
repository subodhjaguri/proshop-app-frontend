import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  EMPTY_CART,
  SAVE_CART_DATA,
} from "../constants/cartConstants";

export const addToCart = (qty, product) => async (dispatch, getState) => {
  // const { data } = await axios.get(
  //   `http://192.168.0.104:5000/api/products/${id}`
  // );
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product,
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
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

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  const jsonCartData = JSON.stringify(getState().cart.cartItems);
  AsyncStorage.setItem("cartItems", jsonCartData);
};
export const emptyCart = () => async (dispatch, getState) => {
  dispatch({
    type: EMPTY_CART,
    payload: {
      cartItems: [],
    },
  });
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  const jsonShippingAddress = JSON.stringify(data);
  AsyncStorage.setItem("shippingAddress", jsonShippingAddress);
};

// export const savePaymentMethod = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_PAYMENT_METHOD,
//     payload: data,
//   })

//   localStorage.setItem('paymentMethod', JSON.stringify(data))
// }
