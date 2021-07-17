import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReduces";
import { userLoginReducer } from "./reducers/userReducers";

const middleware = [thunk];
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

const initialState = {};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
