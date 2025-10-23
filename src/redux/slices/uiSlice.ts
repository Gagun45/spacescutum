import { SHOW_ON_PAGE_OPTIONS } from "@/lib/constants";
import type { FilterCompleted, SortBy, UIState } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";

const initialState: UIState = {
  searchQuery: "",
  sortBy: "createdAtDesc",
  filterCompleted: "all",
  showOnPage: SHOW_ON_PAGE_OPTIONS[0],
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
    setShowOnPage(state, action: PayloadAction<{ showOnPage: number }>) {
      const { showOnPage } = action.payload;
      state.showOnPage = showOnPage;
    },
    resetUI(state) {
      state.filterCompleted = initialState.filterCompleted;
      state.searchQuery = initialState.searchQuery;
      state.sortBy = initialState.sortBy;
    },
  },
});

export const {
  resetUI,
  setFilterCompleted,
  setSearchQuery,
  setSortBy,
  setShowOnPage,
} = UISlice.actions;
export default UISlice.reducer;
