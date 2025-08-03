import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  item: CartItem[];
  quantity: number;
}

const initialState: CartState = {
  item: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.quantity =
          action.payload.quantity ?? existingItem.quantity;
      } else {
        state.item.push({
          product: action.payload.product,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.item = state.item.filter(
        (item) => item.product.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.item.find(
        (item) => item.product.id === action.payload
      );
      if (
        item &&
        item.product.stock !== undefined &&
        item.quantity < item.product.stock
      ) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.item.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.item = [];
      state.quantity = 0;
    },
  },
});

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
