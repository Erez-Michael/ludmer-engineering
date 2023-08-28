//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import { MainHeading } from "../../../GlobalStyles";
import { HeadingContainer } from "./HeroStyles";
import { HeroImage, HeroSection, Wrapper } from "./HeroStyles";

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
            La firme de génie civil pour les entrepreneurs en
            construction
          </MainHeading>
        </HeadingContainer>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
