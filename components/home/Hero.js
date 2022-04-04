import React from "react";
import {
  LinkButtonWrapper,
  SocialButtons,
  Icon,
} from "../layout/header/NavBarStyles";
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
        <SocialButtons>
          <LinkButtonWrapper href="https://github.com/ALiuHua">
            <Icon
              src="/icons/github.svg"
              // src={`${
              //   theme === "lightTheme"
              //     ? "/icons/github.svg"
              //     : "/icons/github-dark.svg"
              // }`}
            />
            <span>Contact</span>
          </LinkButtonWrapper>
          <LinkButtonWrapper href="https://github.com/ALiuHua">
            <Icon
              src="/icons/github.svg"
              // src={`${
              //   theme === "lightTheme"
              //     ? "/icons/github.svg"
              //     : "/icons/github-dark.svg"
              // }`}
            />
            <span>Contact</span>
          </LinkButtonWrapper>
        </SocialButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
