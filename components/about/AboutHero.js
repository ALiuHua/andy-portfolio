import React, { useRef } from "react";
import Image from "next/image";
import mailsBoxPic from "../../public/images/about/mails.png";
import Link from "next/link";
import typeWriterPic from "../../public/images/about/typewriter.png";
import rocketPic from "../../public/images/about/rocket.png";
import {
  HeroSection,
  HeroContainer,
  ContentContainer,
  ImgContainer,
  DescriptionContainer,
  ButtonBox,
  ButtonWrapper,
} from "./AboutStyles";
const AboutHero = () => {
  const contentRef = useRef();
  const scrollToViewHandler = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <HeroSection>
      <HeroContainer>
        <h1>About me</h1>
        <p>
          {
            "Hello! My name is Andy Liu. I'm a self-taught front-end developer living in Syndey, Australia."
          }
        </p>
        <span onClick={scrollToViewHandler}></span>
      </HeroContainer>
      <ContentContainer ref={contentRef}>
        ``
        <ImgContainer>
          <Image src={mailsBoxPic} alt="mail boxs" />
        </ImgContainer>
        <DescriptionContainer>
          <h2>{"I'm the one you'd like to work with"}</h2>
          <p>
            {
              "I'm a hard working and dedicated person with a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on."
            }
          </p>
        </DescriptionContainer>
      </ContentContainer>
      <ContentContainer layout="row-reverse">
        <ImgContainer>
          <Image src={typeWriterPic} alt="typewriter" />
        </ImgContainer>
        <DescriptionContainer>
          <h2>I like to dream more, learn more and become more.</h2>
          <p>
            Since I wrote my first &#34;Hello World&#34; in HTML, I have gained
            experience in:
          </p>
          <ul>
            <li>
              Building Front-End Web Applications (HTML, JavaScript ES6, React,
              Next.js)
            </li>
            <li>
              Applying various CSS solutions(Styled-components, Sass, CSS
              modules)
            </li>
            <li>Building Back-End database(MongoDB, Firebase)</li>
            <li>Interacting with database(RESTful APIs)</li>
            <li>Version Control tools(Git, Github)</li>
          </ul>
          <p>
            {
              "I'm also a fast learner, able to pick up new skills and juggle different projects with relative ease"
            }
          </p>
          <p>{"The following are things I'm planing to learn this year"}</p>
          <ul>
            <li>TypeScript</li> <li>Testing</li>
          </ul>
        </DescriptionContainer>
      </ContentContainer>
      <ContentContainer>
        <ImgContainer>
          <Image src={rocketPic} alt="rocket" />
        </ImgContainer>

        <DescriptionContainer>
          <h2>{"I'm always open to job opportunities and new connections"}</h2>
          <p>
            Shoot me over an email, have a look at me reusme, or just talk with
            me!
          </p>
          <ButtonBox>
            <ButtonWrapper>
              <a href="mailto:liuhua6606@gmail.com">📧 Email</a>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link href="/resume">
                <a>📄 Resume</a>
              </Link>
            </ButtonWrapper>
          </ButtonBox>
        </DescriptionContainer>
      </ContentContainer>
    </HeroSection>
  );
};

export default AboutHero;
