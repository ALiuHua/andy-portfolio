import React from "react";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import {
  HeroSection,
  HeroContainer,
  ContentContainer,
  ImgContainer,
  DescriptionContainer,
} from "./AboutStyles";
const AboutHero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <h1>About me</h1>
        <p>
          Hello! My name is Adrian, I'm a self-taught front-end developer living
          in sunny Brisbane, Australia.
        </p>
        <span></span>
      </HeroContainer>
      <ContentContainer>
        <ImgContainer>
          <img src="/images/about/mails.png" />
        </ImgContainer>

        <DescriptionContainer>
          <h2>I'm the one you'd like to work with</h2>
          <p>
            I’m a hard working and dedicated person with a determination to
            deliver the very highest quality. I take great pride in my work, and
            I always try to better myself with every project I work on.
          </p>
        </DescriptionContainer>
      </ContentContainer>
      <ContentContainer layout="row-reverse">
        <ImgContainer>
          <img src="/images/about/typewriter.png" alt="" />
          {/* <Image
            src="/images/about/typewriter.png"
            alt=""
            width={420}
            height={400}
            layout="responsive"
          /> */}
        </ImgContainer>

        <DescriptionContainer>
          <h2>I'm the one you'd like to work with</h2>
          <p>
            I’m a hard working and dedicated person with a determination to
            deliver the very highest quality. I take great pride in my work, and
            I always try to better myself with every project I work on.
          </p>
        </DescriptionContainer>
      </ContentContainer>
      <ContentContainer>
        <ImgContainer>
          <img src="/images/about/tools.png" />
        </ImgContainer>

        <DescriptionContainer>
          <h2>I'm the one you'd like to work with</h2>
          <p>
            I’m a hard working and dedicated person with a determination to
            deliver the very highest quality. I take great pride in my work, and
            I always try to better myself with every project I work on.
          </p>
        </DescriptionContainer>
      </ContentContainer>
    </HeroSection>
  );
};

export default AboutHero;
