import React from "react";
import styled from "@emotion/styled";
import LazyHero from "react-lazy-hero";
import pichangeablefondo2 from "./UI/pichangeablefondo2.jpeg";
import { Search } from "component/Search";

export const Hero = () => {
  return (
    <HeroContainer>
      <LazyHero imageSrc={pichangeablefondo2} opacity={0.5} parallaxOffset={100}>
        <h1>Encuentra tu cancha preferida :</h1>
        <Search/>
      </LazyHero>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 30%;
  margin: 0 auto;
  text-align: center;
  `;
