import React from "react";
import { HeroSection, HeroWrapper, PrimaryHeading } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <PrimaryHeading>
          Hi. I'm Andy Liu.
          <br />A front-end developer.
        </PrimaryHeading>
        <p>
          Being a part of programming world is really great. It's an amazing
          journey since the first piece of "Hello world" to the functional web
          development. <br />
          Programming makes me a happy man😄
        </p>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
