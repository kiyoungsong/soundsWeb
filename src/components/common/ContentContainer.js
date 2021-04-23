import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 12px 60px 50px rgba(0, 0, 0, 0.7);
  width: 1500px;
  height: 800px;
`;

const Section = styled.section``;

const ContentContainer = ({ children }) => {
  return (
    <>
      <Container>
        <Section></Section>
        <Section>{children}</Section>
        <Section></Section>
      </Container>
    </>
  );
};

export default ContentContainer;
