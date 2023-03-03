import React from "react";
import PageWrapper from "./PageWrapper";
import { Content } from "../components/Content/Content";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import Hero from "../components/Hero/Hero";
//import Features from "../components/Features/Features";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      {/*} <Features />*/}
    </PageWrapper>
  );
};

export default Home;
