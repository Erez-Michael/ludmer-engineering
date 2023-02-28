import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, MainHeading } from "../../GlobalStyles";
import {
  HeroImage,
  HeroSection,
  ButtonWrapper,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage>
        <img
          src="https://res.cloudinary.com/dhcrarc6f/image/upload/v1677188602/crane_nhit01.png"
          alt="crane-image"
        />
      </HeroImage>
      <Container>
        <MainHeading>
          Where contractors go for <span>eficient&nbsp;</span>
          design
        </MainHeading>
        <ButtonWrapper>
          <NavLink to="about">
            <Button>Learn more</Button>
          </NavLink>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
