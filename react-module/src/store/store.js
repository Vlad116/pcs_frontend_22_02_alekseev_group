import { configureStore } from "@reduxjs/toolkit";
import orderSumSliceReducer from "../features/orderSum/orderSumSlice";
import selectedProductsListReducer from "../features/selectedProductsList/selectedProductsListSlice";
import userSliceReduce from "../features/user/user";

const store = configureStore({
  reducer: {
    selectedProductList: selectedProductsListReducer,
    orderSum: orderSumSliceReducer,
    user: userSliceReduce,
  },
});

export default store;
