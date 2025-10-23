import type { FilterCompleted, SortBy, UIState } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";


const initialState: UIState = {
  searchQuery: "",
  sortBy: { field: "createdAt", order: "asc" },
};

const UISlice = createSlice({
  name: "todosUI",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<{ query: string }>) {
      state.searchQuery = action.payload.query;
    },
    setFilterCompleted(
      state,
      action: PayloadAction<{ show: FilterCompleted }>
    ) {
      state.filterCompleted = action.payload.show;
    },
    setSortBy(state, action: PayloadAction<{ sortBy: SortBy }>) {
      const { sortBy } = action.payload;
      state.sortBy = sortBy;
    },
    resetUI(state) {
      state.searchQuery = "";
      state.sortBy = { field: "createdAt", order: "asc" };
      state.filterCompleted = undefined;
    },
  },
});

export const { resetUI, setFilterCompleted, setSearchQuery, setSortBy } =
  UISlice.actions;
export default UISlice.reducer;
