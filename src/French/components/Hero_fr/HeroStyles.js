//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import styled from "styled-components";
import { Button } from "../../../GlobalStyles";

export const HeroSection = styled.section`
  height: 100vh;

  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 35vh, 220px);
  @media screen and (max-width: 1268px) {
    height: 92vh;
  }
  @media screen and (max-width: 1024px) {
    height: 72vh;
  }
  @media screen and (max-width: 768px) {
    height: 62vh;
  }
  @media screen and (max-width: 640px) {
    height: 55vh;
  }
`;

export const HeroImage = styled.image`
  position: absolute;
  top: 120px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 1536px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    top: 80px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  @media screen and (max-width: 1024px) {
    top: -30%;
  }
  @media screen and (max-width: 768px) {
    top: -40%;
  }
  @media screen and (max-width: 640px) {
    top: -75%;
  }
  @media screen and (max-width: 425px) {
    top: -90%;
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
