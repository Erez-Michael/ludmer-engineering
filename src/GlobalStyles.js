import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}
`;
export const Container = styled.div`
  width: 100%;
  margin: 180px auto 0 auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 3vw, 4.5rem);
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clamp */
  /* Because styles are wrapper in backticks, everything in  between is considered a string. Therefore, when you use ${{}} it becomes vanilla JS and {()} is a functional component and insidea props is passed */
  color: #15202b;
  width: 100%;
  letter-spacing: 4px;
  backdrop-filter: blur(5px);
  text-align: center;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;

  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    margin-top: -4rem;
  }

  span {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "#071C2F")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  max-height: 2rem;
  text-align: center;

  
  
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "10px 0 80px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;
export const HomeSection = styled.section`
  padding: ${({ padding }) => (padding ? padding : "10px 10% 80px 10%")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const AboutSection = styled(Section)`
  padding: ${({ padding }) => (padding ? padding : "10px 10% 0 10%")};
`;
export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
  @media screen and (max-width: 768px) {
    display: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
  @media screen and (max-width: 1024px) {
    flex-direction: ${({ direction }) => (direction ? direction : "row")};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`;

export default GlobalStyles;
