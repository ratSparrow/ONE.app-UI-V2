import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.services.find(
        (product) => product._id === action.payload._id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.services.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.services = state.services.filter(
        (item) => item._id !== action.payload._id
      );
    },
    removeOneFromCart: (state, action) => {
      const existing = state.services.find(
        (product) => product._id === action.payload._id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.services = state.services.filter(
          (item) => item._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
