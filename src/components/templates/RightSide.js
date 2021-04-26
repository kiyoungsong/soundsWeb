import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";

const Container = styled.section`
  position: relative;
  width: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Empty = styled.div``;

const FiMenuIcon = styled(FiMenu)`
  width: 20px;
  height: 20px;
  margin-top: 10px;
  opacity: 0.9;
  transform: rotate(90deg);
  color: white;
`;

const LangugeText = styled.span`
  font-size: 14px;
  margin-bottom: 15px;
  color: white;
`;

const RightSide = () => {
  const { isLoaded } = useSelector((state) => state.main);

  return (
    <>
      {isLoaded ? (
        <Container>
          <Empty />
          <FiMenuIcon />
          <LangugeText>EN</LangugeText>
        </Container>
      ) : null}
    </>
  );
};

export default RightSide;
