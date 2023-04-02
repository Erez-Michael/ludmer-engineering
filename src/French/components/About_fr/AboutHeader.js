//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import styled from "styled-components";

const AboutHeader = () => {
  return (
    <ContainerTop>
      <Wrapper>
      <StyledContentTopOne>Passion</StyledContentTopOne>
      <StyledContentTopTwo>et</StyledContentTopTwo>
      <StyledContentTopThree>expérience</StyledContentTopThree>
      </Wrapper>
      <StyledContentTopFour>tout d'abord</StyledContentTopFour>
    </ContainerTop>
  );
};

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top:15rem;
  margin-bottom: -5rem;
`;

const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin-bottom: 2rem

`;

const StyledContentTopOne = styled.div`
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
`;
const StyledContentTopTwo = styled.div`
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
`;
const StyledContentTopThree = styled(StyledContentTopOne)`
`;
const StyledContentTopFour = styled(StyledContentTopTwo)`
`;

export default AboutHeader;
