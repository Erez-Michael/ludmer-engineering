import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink as BaseNavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import Logo from "../../components/Logo/Logo";

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <StyledLogo>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </StyledLogo>

        <RightContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            to={
              "https://www.linkedin.com/in/mordechai-ludmer-ing-m-ing-39a1a312/"
            }
          >
            <BsLinkedin
              size={16}
              style={{
                fill: isHovering ? 
                "#009966" : "whitesmoke",
                transition: isHovering ? "all 0.2s ease-in-out" : "",
                transform: isHovering ? "scale(1.09)" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>
          <NavLink to="/accueil">Français</NavLink>
          <NavLink to="/">English</NavLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne to="/">Home</NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/about">About</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/projects">
            Projects
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/contact">Contact</NavbarLinkExtendedFour>
          <NavbarLinkExtendedFive to="/accueil">
            Français
          </NavbarLinkExtendedFive>
          <NavbarLinkExtendedSix to="/">English</NavbarLinkExtendedSix>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  z-index: 999 !important;
  position: fixed;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    20deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(63, 92, 122, 1) 42%,
    rgba(3, 41, 80, 1) 100%
  );
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    height: 80px;
  }

  @media screen and (min-width: 891px) {
    font-size: 10px;
  }

  @media screen and (max-width: 640px) {
    background: linear-gradient(
      20deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(63, 92, 122, 1) 42%,
      rgba(3, 41, 80, 1) 100%
    );
  }
`;

const NavbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10% 0 10%;
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const StyledLogo = styled.div`
  z-index: 9 !important;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  animation-duration: 0.5s;
  animation-name: slideInRight;

  @keyframes slideInRight {
    from {
      transform: translate3d(250%, 0, 0);
      visibility: visible;
    }
  }
  @media (min-width: 891px) {
    font-size: 12px;
  }
`;

const NavLink = styled(BaseNavLink)`
  color: whitesmoke;
  font-size: 0.8rem;
  text-decoration: none;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
    transform: scale(1.09);
  }
  &.active {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 900;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
const OpenLinksButton = styled.button`
  width: 80px;
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  overflow-y: hidden;
  z-index: 9 !important;
`;

const NavbarLinkExtendedOne = styled(Link)`
  color: whitesmoke;
  font-size: large;
  text-decoration: none;
  cursor: pointer;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.4s;
  animation-name: slideInLeft;

  @keyframes slideInLeft {
    from {
      transform: translate3d(-250%, 0, 0);
      visibility: visible;
    }
  }
`;

const NavbarLinkExtendedTwo = styled(Link)`
  color: whitesmoke;
  font-size: large;
  text-decoration: none;
  cursor: pointer;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.6s;
  animation-name: slideInRight;

  @keyframes slideInRight {
    from {
      transform: translate3d(250%, 0, 0);
      visibility: visible;
    }
  }
`;

const NavbarLinkExtendedThree = styled(NavbarLinkExtendedOne)`
  animation-duration: 0.8s;
`;
const NavbarLinkExtendedFour = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1s;
`;
const NavbarLinkExtendedFive = styled(NavbarLinkExtendedOne)`
  animation-duration: 1.2s;
`;
const NavbarLinkExtendedSix = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1.4s;
`;

export default Header;
