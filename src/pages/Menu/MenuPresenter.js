import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ContentContainer from "../../components/common/ContentContainer";
import { IoMdAirplane } from "react-icons/io";
import Main from "../../components/templates/Main";

const Container = styled.div``;

const MenuPresenter = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const countInterval = setInterval(() => {
      if (counter === 100) {
        clearInterval(countInterval);
        setLoaded(true);
      } else {
        setCounter(counter + 1);
      }
    }, 20);
    return () => clearInterval(countInterval);
  }, [counter]);
  return (
    <>
      <Container>
        <ContentContainer>
          <Main></Main>
        </ContentContainer>
      </Container>
    </>
  );
};

export default MenuPresenter;
