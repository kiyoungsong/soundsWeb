import { configureStore, combineReducers } from "@reduxjs/toolkit";
import main from "./main";
import newAccount from "./newAccount";

const rootReducer = combineReducers({
  main,
  newAccount,
});

const store = configureStore({ reducer: rootReducer });

export default store;
