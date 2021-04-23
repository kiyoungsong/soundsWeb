import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Main from "../pages/Main/MainContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Route to="/" exact component={Main} />
      </>
    </BrowserRouter>
  );
};

export default Router;
