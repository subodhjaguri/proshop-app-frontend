import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  EMPTY_CART,
  SAVE_CART_DATA,
} from "../constants/cartConstants";
export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    case SAVE_CART_DATA:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};
