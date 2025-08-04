import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  search: string;
  category: string;
  sort: "asc" | "desc" | "none";
}

const initialState: FilterState = {
  search: "",
  category: "all",
  sort: "none",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setSearch, setCategory, setSort, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
