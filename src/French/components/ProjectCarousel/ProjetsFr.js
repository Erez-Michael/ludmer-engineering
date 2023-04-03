//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SpinnerDiamond } from "spinners-react";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/ProjectData";
import { Row, Section, TextWrapper } from "../../../GlobalStyles";
import {
  Spinner,
  ContainerTop,
  StyledContentTopTwo,
  StyledContentTopThree,
  ArrowWrapper,
  ButtonContainer,
  ButtonContainerTwo,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  ButtonWrapper,
  CardButton,
} from "./ProjectPageStyles";
import NavbarFr from "../Navbar/NavbarFr";
import FooterFr from "../../../French/components/FooterFr/FooterFr";

const ProjetsFr = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(data);
  }, [data]);

  if (!isLoading) {
    return (
      <Spinner>
        <SpinnerDiamond
          size={90}
          thickness={97}
          speed={102}
          color="rgba(172, 139, 57, 1)"
          secondaryColor="rgba(57, 131, 172, 1)"
        />
      </Spinner>
    );
  } else {
    return (
      <>
        <NavbarFr />
        <Section margin="0 10%" padding="8rem 0" inverse>
          <Row
            justify="space-between"
            direction="column"
            margin="4rem 0"
            wrap="wrap"
          >
            <ContainerTop>
              <StyledContentTopTwo>Nos&nbsp;</StyledContentTopTwo>
              <StyledContentTopThree>réalisations</StyledContentTopThree>
            </ContainerTop>

            <ArrowWrapper>
              <ButtonContainer>
                <IconContext.Provider
                  value={{ size: "3rem", color: "#325272" }}
                >
                  <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
                </IconContext.Provider>
              </ButtonContainer>
              <ButtonContainerTwo>
                <IconContext.Provider
                  value={{ size: "3rem", color: "#325272" }}
                >
                  <FaArrowCircleRight onClick={sliderRef?.slickNext} />
                </IconContext.Provider>
              </ButtonContainerTwo>
            </ArrowWrapper>
          </Row>

          <ReviewSlider {...sliderSettings} ref={setSliderRef}>
            {data.map((e, index) => (
              <>
                <ImageWrapper key={index} to={e.navigateTo}>
                  <CarouselImage src={e.image} />
                  <TextWrapper
                    size="1.4rem"
                    margin="0rem 1rem 2rem"
                    weight="bold"
                  ></TextWrapper>
                </ImageWrapper>
                <ButtonWrapper>
                  <CardButton to={e.navigateTo}>{e.title}</CardButton>
                </ButtonWrapper>
              </>
            ))}
          </ReviewSlider>
        </Section>
        <FooterFr />
      </>
    );
  }
};

export default ProjetsFr;
