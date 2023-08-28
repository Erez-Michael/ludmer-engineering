import React from "react";
import { Container, MainHeading } from "../../../GlobalStyles";
import { HeroImage, HeroSection, Wrapper } from "./HeroStyles";
import { HeadingContainer } from "./HeroStyles";


const Hero = () => {
  return (
    <HeroSection>
      <HeroImage>
        <img
          src="https://res.cloudinary.com/dhcrarc6f/image/upload/v1677188602/crane_nhit01.png"
          alt="crane-image"
        />
      </HeroImage>
      <Wrapper>
        <HeadingContainer>
          <MainHeading>
            Where contractors go for efficient
            design
          </MainHeading>
        </HeadingContainer>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
