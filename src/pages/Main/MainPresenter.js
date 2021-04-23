import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ContentContainer from "../../components/common/ContentContainer";
import { IoMdAirplane } from "react-icons/io";

const Container = styled.div``;

const rotation = keyframes`
  35%{
    transform: rotate(360deg);
  }
  90%{
    transform: rotate(215deg);
  }
  100%{
    transform: rotate(315deg);
  }
`;

const BiPaperPlaneIcon = styled(IoMdAirplane)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform: rotate(315deg);
  color: white;
  top: -15%;
  left: 40%;
  animation: ${rotation} 2s infinite;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Setction = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const LoadingTitle = styled.div`
  width: 100%;
  position: relative;
  left: 15%;
`;

const Subtitle = styled.div`
  width: 100%;
  position: relative;
  left: 15%;
  font-size: 12px;
  opacity: 0.5;
  word-spacing: -1px;
`;

const CountTitle = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainPresenter = () => {
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
        {isLoaded ? (
          <ContentContainer></ContentContainer>
        ) : (
          <LoadingContainer>
            <Setction>
              <BiPaperPlaneIcon></BiPaperPlaneIcon>
            </Setction>
            <Setction>
              <LoadingTitle>IGOR TSARENKO</LoadingTitle>
              <Subtitle>VIDEO / SOUND PRODUCER</Subtitle>
            </Setction>
            <Setction>
              <CountTitle>{counter}</CountTitle>
            </Setction>
          </LoadingContainer>
        )}
      </Container>
    </>
  );
};

export default MainPresenter;
