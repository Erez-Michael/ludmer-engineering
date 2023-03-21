import React from "react";
import PageWrapper from "./PageWrapper";
import { Content } from "../components/Content/Content";
import { ContentTwo } from "../components/Content/ContentTwo";
import { heroOne, heroTwo } from "../data/HeroData";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Content {...heroOne} />
      <ContentTwo {...heroTwo} />
    </PageWrapper>
  );
};

export default Home;
