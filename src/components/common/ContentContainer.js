import React from "react";
import styled from "styled-components";
import LeftSide from "../templates/LeftSide";
import RightSide from "../templates/RightSide";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  width: 95%;
`;

const ContentContainer = ({ children }) => {
  return (
    <>
      <Container>
        <LeftSide />
        <Section>{children}</Section>
        <RightSide />
      </Container>
    </>
  );
};

export default ContentContainer;
