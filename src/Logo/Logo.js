import styled from "styled-components";

const Logo = ({ className }) => {
   window.onscroll = function () {
     scrollFunction();
   };

   const scrollFunction = () => {
     if (
       document.body.scrollTop > 50 ||
       document.documentElement.scrollTop > 50
     ) {
       document.getElementById("logo").style.scale = "0.8";
     } else {
       document.getElementById("logo").style.scale= "1";
     }
  };
  
  const style = {
    transition:"1.5s"
  }
  return (
    <>
      <Container id="logo" style={style} className={className}>
        <Wrapper className="parent">
          <Squares>
            <Top>
              <SquareTopLeft></SquareTopLeft>
              <TiltedSquare className="child"></TiltedSquare>
            </Top>
            <Bottom>
              <SquareBottomLeft></SquareBottomLeft>
              <SquareBottomRight></SquareBottomRight>
            </Bottom>
          </Squares>
          <StyledTitle>
            <Ludmer>LUDMER</Ludmer>
            <Eng>ENGINEERING</Eng>
          </StyledTitle>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999 !important;
  font-weight: 900;
cursor: crosshair;
  & .parent:hover .child {
    transform: translate(-35%, 10%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  & .parent:hover .child {
    transition: all 0.4s ease-in-out;
    background-color: #e5e5f5;
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  @media screen and (max-width: 767px) {
   transform:scale(0.7)
  }
`;
const Squares = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
`;
const SquareTopLeft = styled.div`
  margin: 2px;
  border-radius: 2px;
  height: 20px;
  width: 20px;
  background-color: #e5e5f5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const TiltedSquare = styled.div`
  background-color: #d9d9d9;
  margin-left: 10px;
  margin-bottom: 2px;
  border-radius: 2px;
  height: 20px;
  width: 20px;
  transform: rotate(27deg);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;
const SquareBottomRight = styled.div`
  border-radius: 2px;
  background-color: #ffffff;
  margin: 2px;
  height: 20px;
  width: 20px;
  background-color: #e5e5f5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const SquareBottomLeft = styled.div`
  border-radius: 2px;
  background-color: #ffffff;
  margin: 2px;
  height: 20px;
  width: 20px;
  background-color: #e5e5f5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #d9d9d9;
  margin-left: 5%;
  @media screen and (max-width: 1024px) {
    color: #d9d9d9;
  }
`;
const Ludmer = styled.div`
  font-size: 36px;
  padding-top: 5px;
  font-weight:400;
`;
const Eng = styled.div`
  font-size: 12px;
  padding-left: 46%;
  margin-top: -10px;
`;

export default Logo;
