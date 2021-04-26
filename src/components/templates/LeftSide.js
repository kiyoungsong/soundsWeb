import React from "react";
import styled from "styled-components";
import { IoMdAirplane } from "react-icons/io";
import { FiArrowDownLeft } from "react-icons/fi";
import { useSelector } from "react-redux";

const Container = styled.section`
  position: relative;
  width: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
`;

const BiPaperPlaneIcon = styled(IoMdAirplane)`
  width: 20px;
  height: 20px;
  margin-top: 10px;
  opacity: 0.9;
`;

const Title = styled.div`
  font-size: 13px;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 8px;
  transform: rotate(270deg) translate(-150%, 0%);
  text-shadow: 0 0 10px;
  opacity: 0.7;
`;

const ImExitIcon = styled(FiArrowDownLeft)`
  width: 20px;
  margin-bottom: 10px;
  opacity: 0.9;
`;

const LeftSide = () => {
  const { isLoaded } = useSelector((state) => state.main);

  return (
    <>
      {isLoaded ? (
        <Container>
          <BiPaperPlaneIcon />
          <Title>IGOR TSARENKO</Title>
          <ImExitIcon />
        </Container>
      ) : null}
    </>
  );
};

export default LeftSide;
