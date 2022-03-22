import React from "react";
import { HeroSection, HeroWrapper, PrimaryHeading } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <PrimaryHeading>
          Hi. I'm Adrian Li.
          <br />A front-end developer.
        </PrimaryHeading>
        <p>
          I love spending hours and hours building things, resolving problems,
          and learning new technologies. <br />
          Programming makes me a happy man😄
        </p>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
