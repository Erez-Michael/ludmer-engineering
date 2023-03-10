import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/ProjectData";
import { Row, Section, TextWrapper } from "../../GlobalStyles";
import {
  ContainerTop,
  StyledContentTopTwo,
  StyledContentTopThree,
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./ProjectPageStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    
    <Section margin="0 10%" padding="50px 70px" inverse>
      <Row justify="space-between" direction="column" margin="4rem 0" wrap="wrap">
        <ContainerTop>
          <StyledContentTopTwo>Our&nbsp;</StyledContentTopTwo>
          <StyledContentTopThree>Projects</StyledContentTopThree>
        </ContainerTop>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#325272"}}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((e, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={e.image} />
            <TextWrapper size="1.5rem" margin="1.8rem 0 0" weight="bold" >
              {e.title}
            </TextWrapper>
            {/*<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {e.description}
        </TextWrapper>*/}
            <CardButton to={e.navigateTo}>View Projects</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
