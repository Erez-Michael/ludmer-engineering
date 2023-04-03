import React from 'react';
import styled from 'styled-components';

const AboutHeader = () => {
  return (
    <ContainerTop>
      <StyledContentTop>Where passion meets</StyledContentTop>
      <Wrapper>
      <LetterE>e</LetterE>
      <LetterX>x</LetterX>
      <LetterP>p</LetterP>
      <LetterE1>e</LetterE1>
      <LetterR>r</LetterR>
      <LetterI>i</LetterI>
      <LetterE2>e</LetterE2>
      <LetterN>n</LetterN>
      <LetterC>c</LetterC>
      <LetterE3>e</LetterE3>
      </Wrapper>
    </ContainerTop>
  );
}

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 8rem;
  margin-bottom: -4rem;
  @media screen and (max-width: 768px) {
    margin-bottom: -12rem;
  }
`;


const StyledContentTop = styled.div`
  margin-top: 100px;
  font-size: 60px;
  font-weight: 700;
  animation: fadeIn 3s;

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
    font-size: 45px;
    margin-top: 1rem;
  }
  @media screen and (max-width: 560px) {
    font-size: 30px;
  }
`;

const LetterE = styled.div`
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
  ///////////////////////////////////

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
  @media (min-width: 891px) {
    font-size: 60px;
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
`;
const Wrapper = styled.div`
  display: flex;
`;
const LetterX = styled(LetterE)`
  animation-duration: 0.1s;
`;
const LetterP = styled(LetterE)`
  animation-duration: 0.4s;
`;
const LetterE1 = styled(LetterE)`
  animation-duration: 0.6s;
`;
const LetterR = styled(LetterE)`
  animation-duration: 0.8s;
`;
const LetterI = styled(LetterE)`
  animation-duration: 1s;
`;
const LetterE2 = styled(LetterE)`
  animation-duration: 1.2s;
`;
const LetterN = styled(LetterE)`
  animation-duration: 1.4s;
`;
const LetterC = styled(LetterE)`
  animation-duration: 1.6s;
`;
const LetterE3 = styled(LetterE)`
  animation-duration: 1.8s;
`;




export default AboutHeader;