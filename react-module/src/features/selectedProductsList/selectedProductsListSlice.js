import { createSlice } from "@reduxjs/toolkit";
import { nanoid as uniqueId } from "nanoid";

const initialState = {
  list: [],
  orderSum: 0,
};

export const selectedProductListSlice = createSlice({
  name: "selectedProductList",
  initialState,
  reducers: {
    add: (state, action) => {
      const addedProduct = action.payload;
      addedProduct.id = uniqueId();

      state.list = [...state.list, addedProduct];
    },
    remove: (state, action) => {
      const resultArr = state.list.filter(
        (value) => value.id !== action.payload
      );

      state.list = resultArr;
    },
    getOrderSum: (state) => {
      state.orderSum = state.list.reduce((acc, value) => {
        return acc + +value.price;
      }, 0);
    },
  },
});

export const { add, remove, getOrderSum } = selectedProductListSlice.actions;

export default selectedProductListSlice.reducer;
