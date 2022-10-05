import { configureStore } from "@reduxjs/toolkit";
import orderSumSliceReducer from "../features/orderSum/orderSumSlice";
import selectedProductsListReducer from "../features/selectedProductsList/selectedProductsListSlice";

const store = configureStore({
  reducer: {
    selectedProductList: selectedProductsListReducer,
    orderSum: orderSumSliceReducer,
  },
});

export default store;
