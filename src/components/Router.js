import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "../pages/Main/MainContainer";
import Menu from "../pages/Menu/MenuContainer";
import LeftSide from "./templates/LeftSide";
import RightSide from "./templates/RightSide";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  width: 95%;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Container>
          <LeftSide />
          <Section>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/menu" component={Menu} />
            </Switch>
          </Section>
          <RightSide />
        </Container>
      </>
    </BrowserRouter>
  );
};

export default Router;
