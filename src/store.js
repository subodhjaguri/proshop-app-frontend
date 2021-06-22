import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const middleware = [thunk];
const reducer = combineReducers({
  productList: productListReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
