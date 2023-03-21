import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/ProjectData";
import { Row, Section, TextWrapper } from "../../GlobalStyles";
import {
  ContainerTop,
  StyledContentTopTwo,
  StyledContentTopThree,
  ArrowWrapper,
  ButtonContainer,
  ButtonContainerTwo,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./ProjectPageStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="0 10%" padding="50px 0px" inverse>
      <Row
        justify="space-between"
        direction="column"
        margin="4rem 0"
        wrap="wrap"
      >
        <ContainerTop>
          <StyledContentTopTwo>Our&nbsp;</StyledContentTopTwo>
          <StyledContentTopThree>Projects</StyledContentTopThree>
        </ContainerTop>
        
        <ArrowWrapper>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#325272" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
          </IconContext.Provider>
        </ButtonContainer>
        <ButtonContainerTwo>
          <IconContext.Provider value={{ size: "3rem", color: "#325272" }}>
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainerTwo>
        </ArrowWrapper>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((e, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={e.image} />
            <TextWrapper size="1.4rem" margin="2rem 1rem" weight="bold">
              {e.title}
            </TextWrapper>
            <CardButton to={e.navigateTo}>View Projects</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
