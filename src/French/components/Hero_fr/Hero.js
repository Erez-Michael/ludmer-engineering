//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import { Container, MainHeading } from "../../../GlobalStyles";
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
        <Container>
          <MainHeading>
            <span>Génie civile</span> pour les <span>entrepreneurs&nbsp;</span>{" "}
            en construction
          </MainHeading>
        </Container>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
