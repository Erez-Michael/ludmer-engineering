import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const HeroSection = styled.section`
  height: 80vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  @media screen and (max-width: 640px) {
  height: 60vh;
  }
`;

export const HeroImage = styled.image`
  position: absolute;
  top: 80px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 1536px) {
  }
  @media screen and (max-width: 640px) {
  }
`;

export const HeroText = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: whitesmoke;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  @media screen and (max-width: 640px) {
display:none;    
  }
`;

export const HeroButton = styled(Button)`
  color: black;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
