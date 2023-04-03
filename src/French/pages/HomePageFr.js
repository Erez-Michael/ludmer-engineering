//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import PageWrapper from "./PageWrapper";
import { Content } from "../components/Content/Content";
import { ContentTwo } from "../components/Content/ContentTwo";
import { heroOne, heroTwo } from "../data/HeroData";
import Hero from "../components/Hero_fr/Hero";
import NavbarFr from "../components/Navbar/NavbarFr";
import FooterFr from "../components/FooterFr/FooterFr";

const HomePageFr = () => {
  return (
    <PageWrapper>
      <NavbarFr />
      <Hero />
      <Content {...heroOne} />
      <ContentTwo {...heroTwo} />
      <FooterFr />
    </PageWrapper>
  );
};

export default HomePageFr;
