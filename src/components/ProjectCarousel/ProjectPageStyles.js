import styled from "styled-components";
import { Row } from "../../GlobalStyles";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const Spinner = styled.span`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`;

export const ContainerTop = styled.div`
  position: relative;
  top: 35px;
  display: flex;
 justify-content: center;
`;


export const StyledContentTopTwo = styled.div`
  font-size: 60px;
  font-weight: 700;
 
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 475px) {
    font-size: 40px;
    
  }
`;

export const StyledContentTopThree = styled.div`
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
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 475px) {
    font-size: 40px;
    align-items: flex-start;
  }

  p {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
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
export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 430px;
  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
margin-top: 50px;
padding: 0 50px;
`;

export const ButtonContainer = styled(Row)`
  position: relative;
  cursor: pointer;

  & svg:hover {
    opacity: 0.8;
    transition: 0.25s ease-in-out;
  }
  @media screen and (max-width: 768px) {
justify-content:center;
margin-bottom: -30px;
margin-top: 20px;
  }
`;
export const ButtonContainerTwo = styled(ButtonContainer)``;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled(Link)`
  background-color: #325272;
  text-decoration: none;
  text-align: center;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;
  &:hover {
    background-color: #3f7aa6;
    transition: background-color 0.25s ease-in-out;
  }

`;
