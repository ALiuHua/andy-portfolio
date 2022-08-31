import React from "react";
import {
  ResumeSection,
  ResumeWrapper,
  ResumeStyle,
  BriefInfo,
  Title,
  ContactList,
  ContactItem,
  CardWrapper,
  SubTitle,
  TagWrapper,
  SkillTag,
  StageItem,
  DetailsInfo,
  KeyFeatureListWrapper,
  KeyFeatureList,
} from "./ResumeContentStyles";
import {
  ContactButton,
  PhoneOutIcon,
  LocationIcon,
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  HtmlIcon,
  CSSIcon,
  SassIcon,
  JavascriptIcon,
  ReactIcon,
  NextJsIcon,
  GitIcon,
  FirebaseIcon,
  MongodbIcon,
  StyledComponentsIcon,
  DownloadIcon,
} from "../ui/Icons";
const contactInfo = [
  {
    src: <LocationIcon />,
    details: "U7,134-136 woodville Rd, Merrylands, Syndey, 2160",
  },
  {
    src: <EmailIcon />,
    details: "liuhua6606@gmail.com",
    hrefStr: "mailTo:liuhua6606@gmail.com",
  },
  {
    src: <LinkedInIcon />,
    details: "https://www.linkedin.com/in/andyliu-dev",
    hrefStr: "https://www.linkedin.com/in/andyliu-dev",
  },
  {
    src: <GithubIcon />,
    details: "https://github.com/ALiuHua",
    hrefStr: "https://github.com/ALiuHua",
  },
  {
    src: <PhoneOutIcon />,
    details: "0405-056-659",
    hrefStr: "tel:+61 0432548840",
  },
  {
    src: <DownloadIcon />,
    details: "Download Resume",
    hrefStr:
      "https://drive.google.com/file/d/1T3QRJE6evbPme8F49q5Cdqsh2bAfJTdN/view?usp=sharing",
  },
];
const ResumeContent = () => {
  return (
    <>
      <ResumeSection>
        <ResumeWrapper className="resumePage">
          <ResumeStyle />
          <BriefInfo>
            <Title>
              <span>Andy Liu</span> <span>Front-end</span>
              <span> developer</span>
            </Title>
            <CardWrapper>
              <SubTitle>contact</SubTitle>
              <ContactList className="contactList">
                {contactInfo.map((item, index) => (
                  <ContactItem key={index}>
                    <ContactButton
                      hrefStr={item?.hrefStr}
                      details={item?.details}
                    >
                      <span className="contactIcon">{item.src}</span>
                      <span>{item.details}</span>
                    </ContactButton>
                  </ContactItem>
                ))}
              </ContactList>
            </CardWrapper>
            <CardWrapper>
              <SubTitle>Skills</SubTitle>
              <TagWrapper>
                <SkillTag bgColor={"#de4b25"}>
                  <HtmlIcon />
                  <span>HTML5</span>
                </SkillTag>
                <SkillTag bgColor={"#254bde"}>
                  <CSSIcon />
                  <span>CSS3</span>
                </SkillTag>
                <SkillTag bgColor={"#eed818"} color={"#656270"}>
                  <JavascriptIcon />
                  <span>Javascript</span>
                </SkillTag>
                <SkillTag bgColor={"#5ed4f4"}>
                  <ReactIcon />
                  <span>React</span>
                </SkillTag>
                <SkillTag bgColor={"#000"}>
                  <NextJsIcon />
                  <span>Next.js</span>
                </SkillTag>
                <SkillTag bgColor={"#53a74b"}>
                  <MongodbIcon />
                  <span>MongoDB</span>
                </SkillTag>
                <SkillTag bgColor={"#ea4d32"}>
                  <GitIcon />
                  <span>Git</span>
                </SkillTag>
                <SkillTag bgColor={"#ffcc30"} color={"#656270"}>
                  <FirebaseIcon />
                  <span>Firebase</span>
                </SkillTag>
                <SkillTag bgColor={"#ca65b0"}>
                  <StyledComponentsIcon />
                  <span>styled components</span>
                </SkillTag>
                <SkillTag bgColor={"#ce719e"}>
                  <SassIcon />
                  <span>Sass</span>
                </SkillTag>
              </TagWrapper>
            </CardWrapper>
            <CardWrapper>
              <SubTitle>Education</SubTitle>
              <StageItem>
                <div>
                  <span>University of Shanghai for Science and Technology</span>
                  <span>2010-2014</span>
                  <span>Bachelor of Thermal and Power Engineering</span>
                </div>
              </StageItem>
            </CardWrapper>
          </BriefInfo>
          <DetailsInfo>
            <CardWrapper>
              <SubTitle>About me</SubTitle>
              <p>
                I am a self-taught React Front-End Developer who is experienced
                in:
              </p>
              <KeyFeatureList>
                <li>
                  Building Front-End Web Applications (HTML, JavaScript ES6,
                  React, Next.js)
                </li>
                <li>
                  Applying various CSS solutions(Styled-components, Sass, CSS
                  modules)
                </li>
                <li>Building Back-End database(MongoDB, Firebase)</li>
                <li>Interacting with database(RESTful APIs)</li>
                <li>Version Control tools(Git, Github)</li>
              </KeyFeatureList>
            </CardWrapper>
            <CardWrapper>
              <SubTitle>Featured product</SubTitle>
              <StageItem>
                <div>
                  <span>
                    Netflex - A project which can give you the same experience
                    as Netflix
                  </span>
                  <a href="#">LIVE DEMO</a>
                  <a href="#">CODE</a>
                </div>
              </StageItem>
              <p>
                A production-ready, open-source Netflix clone built with React,
                Next.js, styled-component, NextAuth.js, and MongoDB.
              </p>
              <KeyFeatureListWrapper>
                <span>Important features:</span>
                <KeyFeatureList>
                  <li>
                    <p>
                      <strong>Fully responsive with great UX and UI. </strong>
                      It can fit perfectly well with all kinds of screen
                      devices.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Secure sign-up/sign-in authentication with route
                        protection to keep your privite page guarded.
                      </strong>
                      User information is well encrypted both in the front-end
                      and back-end. Unauthorized visits will be redirected.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>CRUD operation. </strong> After login, users can
                      add, save, edit and delete their profiles. And as you
                      expected, there are some more features you can explore
                      like managing your personal favirote list and so on.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>High performance. </strong>Netflex utilizes SSG
                      pre-rendering technology built in Next.js which makes it
                      super fast and smooth.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Much more than just a clone. </strong> Netflex
                      reproduces the experience of browsing real Netflix by
                      using reusable React hooks and components along with
                      complicated CSS and multiple API calls. This will be the
                      best Netflix clone you have ever seen.
                    </p>
                  </li>
                </KeyFeatureList>
              </KeyFeatureListWrapper>
            </CardWrapper>
          </DetailsInfo>
        </ResumeWrapper>
      </ResumeSection>
    </>
  );
};

export default ResumeContent;
