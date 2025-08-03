import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/productSlice";
import cartSlice from "../store/CartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
