import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/productSlice";
import cartSlice from "../store/CartSlice";
import filterSlice from "../store/filterSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    filters: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
