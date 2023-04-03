//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import styled from "styled-components";

const AboutHeader = () => {
  return (
    <ContainerTop>
      <Wrapper>
        <LetterP>P</LetterP>
        <LetterA>a</LetterA>
        <LetterS>s</LetterS>
        <LetterS2>s</LetterS2>
        <LetterI>i</LetterI>
        <LetterO>o</LetterO>
        <LetterN>n</LetterN>
        <StyledContentTop>et</StyledContentTop>
        <LetterE1>E</LetterE1>
        <LetterX>x</LetterX>
        <LetterP2>p</LetterP2>
        <LetterÉ>é</LetterÉ>
        <LetterR>r</LetterR>
        <LetterI2>i</LetterI2>
        <LetterE2>e</LetterE2>
        <LetterN2>n</LetterN2>
        <LetterC>c</LetterC>
        <LetterE3>e</LetterE3>
      </Wrapper>
      <StyledContentBottom>tout d'abord</StyledContentBottom>
    </ContainerTop>
  );
};

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding-top: 10rem;
    margin-bottom: -10rem;
  }
  @media screen and (max-width: 560px) {
    padding-top: 10rem;
    margin-bottom: -10rem;
  }
`;

const StyledContentTop = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin: 0 1rem;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 560px) {
    font-size: 30px;
    
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
x  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 560px) {
    display: flex;
    flex-wrap:wrap
  }
  
`;

const LetterP = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: xx-large;
  font-size: 60px;
  font-weight: 700;
  ///// Gradient ///////////////
  background-image: linear-gradient(45deg, #009966, #f3ec78);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  /////////////////////////////

  animation-duration: 0s;
  animation-name: letterSlide;

  @keyframes letterSlide {
    from {
      transform: translate3d(-5000%, 0, 0);
      visibility: visible;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 475px) {
    font-size: 30px;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`;
const StyledContentBottom = styled.div`
  margin: 0 1rem;
  font-size: 60px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 50px;
    margin: 0 0.7rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 560px) {
    font-size: 40px;
    position: relative;
    margin: 0 0.5rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 30px;
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`;

const LetterA = styled(LetterP)`
  animation-duration: 0.2s;
`;
const LetterS = styled(LetterP)`
  animation-duration: 0.4s;
`;
const LetterS2 = styled(LetterP)`
  animation-duration: 0.6s;
`;
const LetterI = styled(LetterP)`
  animation-duration: 0.8s;
`;
const LetterO = styled(LetterP)`
  animation-duration: 1s;
`;
const LetterN = styled(LetterP)`
  animation-duration: 1.2s;
`;


const LetterE3 = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: xx-large;
  font-size: 60px;
  font-weight: 700;
  ///// Gradient ///////////////
  background-image: linear-gradient(45deg, #009966, #f3ec78);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  /////////////////////////////
  animation-duration: 0.1s;
  animation-name: letterAnimation;

  @keyframes letterAnimation {
    from {
      transform: translate3d(-5000%, 0, 0);
      visibility: visible;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 475px) {
    font-size: 30px;
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`;
const LetterE1 = styled(LetterE3)`
  animation-duration: 1s;
`;
const LetterX = styled(LetterE3)`
  animation-duration: 0.9s;
`;
const LetterP2 = styled(LetterE3)`
  animation-duration: 0.8s;
`;
const LetterÉ = styled(LetterE3)`
  animation-duration: 0.7s;
`;
const LetterR = styled(LetterE3)`
  animation-duration: 0.6s;
`;
const LetterI2 = styled(LetterE3)`
  animation-duration: 0.5s;
`;
const LetterE2 = styled(LetterE3)`
  animation-duration: 0.4s;
`;
const LetterN2 = styled(LetterE3)`
  animation-duration: 0.3s;
`;
const LetterC = styled(LetterE3)`
  animation-duration: 0.2s;
`;
export default AboutHeader;
