import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import main from "./main";

const rootReducer = combineReducers({
  main,
});

const store = configureStore({ reducer: rootReducer });

export default store;
