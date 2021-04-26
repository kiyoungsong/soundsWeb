import React from "react";
import { useSelector } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
