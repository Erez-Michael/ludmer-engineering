import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../GlobalStyles";
import {
  HeroImage,
  HeroSection,
  HeroText,
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
          <Link to="about">
            <Button>Learn more</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
