import React from "react";
import { Container, MainHeading } from "../../GlobalStyles";
import {
  HeroImage,
  HeroSection,
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
          Where contractors go for <span>efficient&nbsp;</span>
          design
        </MainHeading>
     
      </Container>
    </HeroSection>
  );
};

export default Hero;
