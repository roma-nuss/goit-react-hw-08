import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload ? action.payload.toString() : "";
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
