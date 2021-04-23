import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
};

const main = createSlice({
  name: "mainReducer",
  initialState,
  showMain: (state, action) => {
    return { ...state, isLoaded: action.payload };
  },
});

const { showMain } = main.actions;

export default main.reducer;
