import React from 'react';
import styled from 'styled-components';

const AboutHeader = () => {
  return (
    <ContainerTop>
     
      <StyledContentTopTwo>Where passion meets</StyledContentTopTwo>
      <StyledContentTopThree>experience.</StyledContentTopThree>
    </ContainerTop>
  );
}

const ContainerTop = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 10%;
`;


const StyledContentTopTwo = styled.div`
  margin-top: 100px;
  font-size: 60px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 560px) {
    font-size: 30px;
  }
`;

const StyledContentTopThree = styled.div`
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


export default AboutHeader