import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../types";

import productApi from "../api/productApi";
import type { RootState } from "./store";

export const fetchProducts = createAsyncThunk<
  { products: Product[]; total: number; page: number; limit: number },
  void,
  { state: RootState }
>("products/fetchProducts", async (_, { getState, rejectWithValue }) => {
  try {
    const { filters, products } = getState();
    const { search, category, sort } = filters;
    const { currentPage, limit } = products;

    let res;

    if (search) {
      res = await productApi.searchProducts(search, currentPage, limit);
    } else if (category !== "all") {
      res = await productApi.searchByCategory(category, currentPage, limit);
    } else {
      res = await productApi.getProducts(currentPage, limit);
    }

    let productList: Product[] = res.data.products;

    if (sort === "asc")
      productList = [...productList].sort((a, b) => a.price - b.price);
    if (sort === "desc")
      productList = [...productList].sort((a, b) => b.price - a.price);

    return {
      products: productList,
      total: res.data.total,
      page: currentPage,
      limit: limit,
    };
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.message || "Failed to fetch products");
  }
});

export const fetchSingleProduct = createAsyncThunk<Product, number>(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await productApi.getSingleProduct(id);
    return res.data;
  }
);

const initialState: ProductState = {
  items: [],
  selectedProduct: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  limit: 12,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.currentPage = action.payload.page;
        state.totalPages = Math.ceil(
          action.payload.total / action.payload.limit
        );
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

export const { setPage } = productSlice.actions;

export default productSlice.reducer;
