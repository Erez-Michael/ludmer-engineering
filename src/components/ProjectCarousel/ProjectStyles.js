import styled from "styled-components";
import { Row } from "../../GlobalStyles";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const ContainerTop = styled.div`
  position: relative;
  left: 25px;
  top: 30px;
  display: flex;
 
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
  
 
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 475px) {
    font-size: 40px;
    align-items: flex-start;
  }

  p {
    color: #000;
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
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 430px;
  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(Row)`
  display: flex;
  position: relative;
  justify-content: flex-end;
  & svg {
    margin: 0 1rem;
    margin-top: 3rem;
    cursor: pointer;
  }
  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 768px) {
justify-content:center;
margin-bottom: -30px;
margin-top: 20px;
  }
`;

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
    margin-bottom: 1;
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
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
