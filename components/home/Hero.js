import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Icon } from "../layout/header/NavBarStyles";
import {
  HeroSection,
  HeroWrapper,
  PrimaryHeading,
  LinkButtonWrapper,
  SocialButtons,
} from "./HeroStyles";
const Hero = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(themeName);
  return (
    <HeroSection>
      <HeroWrapper>
        <PrimaryHeading>
          {"Hi. I'm Andy Liu."}
          <br />A front-end developer.
        </PrimaryHeading>
        <p>
          Being a part of programming world is really great. It&#39;s an amazing
          journey since the first piece of &#34;Hello world&#34; to the
          functional web development. <br />
          {
            "It's a beautiful thing to see my code transforming into a product that we can use to browse in internet world😄."
          }
        </p>
        <SocialButtons>
          <LinkButtonWrapper href="https://github.com/ALiuHua">
            <Icon
              src={`${
                themeName === "lightTheme"
                  ? "/icons/github.svg"
                  : "/icons/github-dark.svg"
              }`}
            />
            <span>Github</span>
          </LinkButtonWrapper>
          <LinkButtonWrapper href="https://www.linkedin.com/in/andy-liu-94697a181/">
            <Icon
              src={`${
                themeName === "lightTheme"
                  ? "/icons/linkedin.svg"
                  : "/icons/linkedin-dark.svg"
              }`}
            />
            <span>Linkedin</span>
          </LinkButtonWrapper>
          <LinkButtonWrapper href="mailto: liuhua6606@163.com">
            <Icon
              src={`${
                themeName === "lightTheme"
                  ? "/icons/email.svg"
                  : "/icons/email-dark.svg"
              }`}
            />
            <span>Email</span>
          </LinkButtonWrapper>
        </SocialButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
