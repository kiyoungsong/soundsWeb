import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
};

const mainStore = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    showMain: (state, action) => {
      console.log("test11");
      return { ...state, isLoaded: action.payload };
    },
  },
});

export const { showMain } = mainStore.actions;

export default mainStore.reducer;
