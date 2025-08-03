import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../types";
import api from "../api/productApi";

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    try {
      const res = await api.get("/products");
      return res.data.products;
    } catch (error) {
      console.log("Fetching error check slice", error);
    }
  }
);

export const fetchSingleProduct = createAsyncThunk<Product, number>(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  }
);

const initialState: ProductState = {
  items: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details";
      });
  },
});

export default productSlice.reducer;
