//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import Logo from "../../../Logo/Logo";
import {
  NavbarContainer,
  NavbarInnerContainer,
  StyledLogo,
  RightContainer,
  NavLink,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtendedOne,
  NavbarLinkExtendedTwo,
  NavbarLinkExtendedThree,
  NavbarLinkExtendedFour,
  NavbarLinkExtendedFive,
  NavbarLinkExtendedSix,
} from "./NavbarStyles";

const NavbarFr = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const closeNavbar = () => {
    setExtendNavbar(false);
  };

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
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <NavLink to="/projets">Réalisations</NavLink>
          <NavLink to="/contact-fr">Contact</NavLink>
          <NavLink
            to={
              "https://www.linkedin.com/in/mordechai-ludmer-ing-m-ing-39a1a312/"
            }
          >
            <BsLinkedin
              size={16}
              style={{
                fill: isHovering ? "#009966" : "whitesmoke",
                transition: isHovering ? "all 0.2s ease-in-out" : "",
                transform: isHovering ? "scale(1.09)" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>
          <NavLink to="/">FR</NavLink>
          <NavLink to="/home">EN</NavLink>
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
          <NavbarLinkExtendedOne onMenuItemSelect={closeNavbar} to="/">
            Accueil
          </NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/a-propos">À propos</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/projets">
            Réalisations
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/contact-fr">
            Contact
          </NavbarLinkExtendedFour>
          <NavbarLinkExtendedFive to="/">
            Français
          </NavbarLinkExtendedFive>
          <NavbarLinkExtendedSix to="/home">English</NavbarLinkExtendedSix>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default NavbarFr;
