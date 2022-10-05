import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
};

export const orderSum = createSlice({
  name: "orderSum",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.sum += +action.payload;
    },
    decrease: (state, action) => {
      state.sum -= +action.payload;
    },
  },
});

export const { increase, decrease } = orderSum.actions;

export default orderSum.reducer;
