import React, { useRef } from "react";
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
  const contentRef = useRef();
  const scrollToViewHandler = () => {
    //to resolve the problem that we got fixed header cover the scroll view.
    contentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    // window.scroll(0, contentRef.current.offsetTop - 112);
  };
  return (
    <HeroSection>
      <HeroContainer>
        <h1>About me</h1>
        <p>
          Hello! My name is Adrian, I'm a self-taught front-end developer living
          in sunny Brisbane, Australia.
        </p>
        <span onClick={scrollToViewHandler}></span>
      </HeroContainer>
      <ContentContainer ref={contentRef}>
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
