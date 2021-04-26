import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import mainbackground from "../../assets/images/mainbackground.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const BgImg = styled.img`
  width: 50vw;
  height: 99.7vh;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -68%);
`;

const InnerSection = styled.section`
  position: relative;
`;

const Divid = styled.div`
  width: 30px;
  height: 1px;
  margin-bottom: 20px;
`;

const MainTitle = styled.div`
  font-size: 4vw;
  white-space: nowrap;
  letter-spacing: 5px;
`;

const SubTitle = styled.div`
  margin-left: 4px;
  font-size: 1vw;
  color: #a7a7a7;
  white-space: nowrap;
  letter-spacing: 0.95vw;
`;

const DragContainer = styled.div`
  position: relative;
  margin-top: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const DragInner = styled.div``;

const DragSlider = styled.input`
  position: absolute;

  top: 8px;
  width: 15vw;
  height: 2px;
  -webkit-appearance: none;
  background: linear-gradient(to right, #181919 20%, rgb(49, 49, 48, 1));
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 10px white;
    cursor: pointer;
  }
`;

const DragText = styled.div`
  position: relative;
  left: 8.8%;
  font-size: 0.8vw;
  color: #a7a7a7;
  letter-spacing: 0.3vw;
`;

const Middle = () => {
  const { isLoaded } = useSelector((state) => state.main);
  const [count, setCount] = useState(0);

  const onChange = (event) => {
    const { value } = event.target;
    setCount(value);
  };
  return (
    <>
      {isLoaded ? (
        <Container>
          <Section>
            <BgImg src={mainbackground} />
          </Section>
          <Section>
            <InnerContainer>
              <InnerSection>
                <Divid>&nbsp;</Divid>
                <MainTitle>IGOR TSARENKO</MainTitle>
                <SubTitle>VIDEO / SOUND PRODUCER</SubTitle>
              </InnerSection>
              <InnerSection isDrag={true}>
                <DragContainer>
                  <DragInner>
                    <DragSlider
                      className="dragSlider"
                      type="range"
                      min="1"
                      max="11"
                      list="custom-list"
                      value={count}
                      onChange={onChange}
                    />
                  </DragInner>
                  <DragText>HOLD & MOVE</DragText>
                </DragContainer>
              </InnerSection>
            </InnerContainer>
          </Section>
        </Container>
      ) : null}
    </>
  );
};

export default Middle;
