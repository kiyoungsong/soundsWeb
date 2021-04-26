import { createSlice } from "@reduxjs/toolkit";

// 초기 State
const initialState = {
  email: "thdrldud369@naver.com", // 임시
  pwd: "",
  username: "",
  country: [],
  native: [],
  learn: [],
  interest: [],
};

const newAccountStore = createSlice({
  name: "newAccountReducer",
  initialState,
  reducers: {
    createAccount: (state, action) => {
      const { email, pwd, username } = action.payload;
      return { ...state, email, pwd, username };
    },
    createProfile: (state, action) => {
      const { country, native, learn, interest } = action.payload;
      return { ...state, country, native, learn, interest };
    },
    clearNewAccount: (state) => ({
      ...state,
      email: "",
      pwd: "",
      username: "",
      country: [],
      native: [],
      learn: [],
      interest: [],
    }),
  },
});

export const {
  createAccount,
  createProfile,
  clearNewAccount,
} = newAccountStore.actions;
export default newAccountStore.reducer;
