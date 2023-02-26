import React from "react";

import { Content } from "../components/Content/Content";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Carousel from "../components/Carousel/Carousel";


const Home = () => {
  return (
    <>
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Features />
      <Carousel />
    </>
  );
};

export default Home;
