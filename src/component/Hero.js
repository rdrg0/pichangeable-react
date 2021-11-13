import React from "react";
import LazyHero from "react-lazy-hero";
import pichangeablefondo2 from "./UI/pichangeablefondo2.jpeg";

export const Hero = () => {
  return (
    <div>
      <LazyHero imageSrc={pichangeablefondo2} property="opacity= 0.2">
        <h1>Encuentra tu cancha preferida :</h1>
      </LazyHero>
    </div>
  );
};
