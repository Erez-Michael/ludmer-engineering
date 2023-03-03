import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <ContainerTop>
          <StyledContentTopOne>/ About us</StyledContentTopOne>
          <StyledContentTopTwo>Where passion meets</StyledContentTopTwo>
          <StyledContentTopThree>
             experience.
          </StyledContentTopThree>
        </ContainerTop>
        <Container>
          <StyledContentImg>
            <img src="https://res.cloudinary.com/dhcrarc6f/image/upload/v1677007099/Engineer-tools_gdcl9k.jpg" />
          </StyledContentImg>
          <StyledContentInfoOne>
            <h3>/ Mission Statement</h3>
            <p>
              Ludmer engineering is a fledgling firm, borne of the necessity to
              provide efficeint design tailored to the needs of builders and
              contractors. For every project undertaken, we are committed to
              providing a direct design approach for the most efficient
              solution.
            </p>
          </StyledContentInfoOne>
        </Container>
        <Container>
          <StyledContentInfoTwo>
            <h3>/ Innovation & excellence</h3>
            <p>
              Our objective is to complete field recon to fully understand soil
              conditions, other relevant site conditions and glean any other
              information already collected by the client. Simply put we follow
              engeineering guidelines and codes when available, however due to
              20+ years of experience we are able to innovate when faced with
              unlikely and unusual scenarios. We love a new challenge, and revel
              in meeting or exceeding clients expectations and we certainly
              won't cower away from getting our hands dirty. We pride ourselves
              on being equipped with state of the art technologies and have
              diligent and passionate people behind every project.
            </p>
          </StyledContentInfoTwo>
          <StyledContentImg>
            <img src="https://res.cloudinary.com/dhcrarc6f/image/upload/v1677008355/Ludmer%20Engineering/plan_ztpwbo.png" />
          </StyledContentImg>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /*border: solid red 3px;*/
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: fit-content;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 1023px) {
    top: 80px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerTop = styled.div`
  /* border: solid green 3px;*/
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
`;

const StyledContentTopOne = styled.div`
  height: 150px;
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  font-size: 25px;
`;
const StyledContentTopTwo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 60px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 475px) {
    font-size: 20px;
    height: 80px;
  }
`;

const StyledContentTopThree = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: xx-large;
  font-size: 60px;
  font-weight: 700;
  background-image: linear-gradient(45deg, #009966, #f3ec78);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 475px) {
    font-size: 20px;
    align-items: flex-start;
    margin-top: 10px;
  }

  p {
    color: #000;
    font-size: 60px;
    font-weight: 700;
    margin-right: 10px;
    margin-left: 10px;
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media screen and (max-width: 475px) {
      font-size: 20px;
    }
  }
`;


//////////////////////////////////////


const Container = styled.div`
  /*order: solid yellow 3px;*/
  display: flex;
  margin-left: 15%;
  margin-right: 15%;
  padding-bottom: 5%;
  margin-top: 50px;
  gap: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    margin-top: -50px;
  }
`;

const StyledContentImg = styled.div`
  aspect-ratio: 1/1;
  position: sticky;
  flex-direction: row;
  width: 70vw;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 50px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  `;

const StyledContentInfoOne = styled.div`
  position: sticky;
  flex-direction: row;
  width: 70vw;
  height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 100px;
  h3 {
    padding-top: 20px;
    font-size: 20px;
    color: #000;
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin-top: 50px;
    }
  }
  p {
    /*border: solid red 3px;*/
    margin-top: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
  
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-top: -160px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    
  }
  @media screen and (max-width: 475px) {
    font-size: 20px;
  
  }
`;

const StyledContentInfoTwo = styled(StyledContentInfoOne)`
margin-top: 20px;
  @media screen and (min-width: 1024px) {
    height: fit-content;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    position: relative;
  }
`;

export default About;
