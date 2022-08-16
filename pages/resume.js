import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
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
} from "../components/ui/Icons";
const buttonInfo = [
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
    details: "linkedin",
    hrefStr: "linkedin",
  },
  {
    src: <GithubIcon />,
    details: "github",
    hrefStr: "github",
  },
  {
    src: <PhoneOutIcon />,
    details: "0405-056-659",
    hrefStr: "tel:+0432548840",
  },
];
export const ContactButton = ({ hrefStr, children }) => {
  // const { themeName } = useContext(ThemeContext);
  console.log(buttonInfo[0].src);
  return (
    <ButtonWrapper>
      {hrefStr ? <a href={hrefStr}>{children}</a> : <>{children}</>}
    </ButtonWrapper>
  );
};

const Resume = () => {
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
              <ContactList>
                {buttonInfo.map((item, index) => (
                  <ContactItem key={index}>
                    <ContactButton hrefStr={item?.hrefStr}>
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
                  <HtmlIcon bgColor={"#de4b25"} />
                  <span>HTML5</span>
                </SkillTag>
                <SkillTag bgColor={"#254bde"}>
                  <CSSIcon />
                  <span>CSS3</span>
                </SkillTag>

                <SkillTag bgColor={"#eed818"}>
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
                <SkillTag bgColor={"#ffcc30"}>
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
                  React, Next.js, Vue)
                </li>
                <li>
                  Applying various CSS solutions(Styled- components, Tailwind
                  CSS, Sass, CSS modules)
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
                    Hotflix - A project that got 3.5k upvotes on Reddit
                  </span>
                  <a href="#">LIVE DEMO</a>
                  <a href="#">CODE</a>
                  <a href="#">REDDIT</a>
                </div>
              </StageItem>
              <p>
                A production-ready, open-source Netflix clone built with React,
                Next.js, styled-component, and MongoDB.
              </p>
              <KeyFeatureListWrapper>
                <span>Important features:</span>
                <KeyFeatureList>
                  <li>
                    <p>
                      <strong>Fully responsive with great UX and UI.</strong>"It
                      looks ridiculously amazing." by one of the comments from
                      Reddit.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Secure sign-up/sign-in authentication with route
                        protection.
                      </strong>
                      User information is well encrypted both in the front-end
                      and back-end. Unauthorized visits will be redirected.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>CRUD operation.</strong> After login, users can
                      add, save, edit and delete their profiles.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>High performance.</strong> Hotflix utilizes SSG
                      pre- rendering technology which makes it super fast and
                      smooth.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Much more than just a clone.</strong> Hotflix
                      reproduces the experience of browsing real Netflix by
                      using reusable React hooks and components along with
                      complicated CSS and multiple API calls. This will be the
                      best Netflix clone you have ever seen.
                    </p>
                  </li>
                  {/* <li>
                    <p>
                      <strong>Much more than just a clone.</strong> Hotflix
                      reproduces the experience of browsing real Netflix by
                      using reusable React hooks and components along with
                      complicated CSS and multiple API calls. This will be the
                      best Netflix clone you have ever seen.
                    </p>
                  </li> */}
                </KeyFeatureList>
              </KeyFeatureListWrapper>
            </CardWrapper>
          </DetailsInfo>
        </ResumeWrapper>
      </ResumeSection>
      {/* <ResumeSection>
        <ResumeWrapper>
          <ResumeStyle />
          <BriefInfo>
            <Title>
              <span>Andy Liu</span> <span>Front-end</span>
              <span> developer</span>
            </Title>
            <CardWrapper>
              <SubTitle>contact</SubTitle>
              <ContactList>
                {buttonInfo.map((item, index) => (
                  <ContactItem key={index}>
                    <ContactButton hrefStr={item?.hrefStr}>
                      <span>{item.src}</span>
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
                  <HtmlIcon bgColor={"#de4b25"} />
                  <span>HTML5</span>
                </SkillTag>
                <SkillTag bgColor={"#254bde"}>
                  <CSSIcon />
                  <span>CSS3</span>
                </SkillTag>

                <SkillTag bgColor={"#eed818"}>
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
                <SkillTag bgColor={"#ffcc30"}>
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
                  React, Next.js, Vue)
                </li>
                <li>
                  Applying various CSS solutions(Styled- components, Tailwind
                  CSS, Sass, CSS modules)
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
                    Hotflix - A project that got 3.5k upvotes on Reddit
                  </span>
                  <a href="#">LIVE DEMO</a>
                  <a href="#">CODE</a>
                  <a href="#">REDDIT</a>
                </div>
              </StageItem>
              <p>
                A production-ready, open-source Netflix clone built with React,
                Next.js, styled-component, and MongoDB.
              </p>
              <KeyFeatureListWrapper>
                <span>Important features:</span>
                <KeyFeatureList>
                  <li>
                    <p>
                      <strong>Fully responsive with great UX and UI.</strong>"It
                      looks ridiculously amazing." by one of the comments from
                      Reddit.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Secure sign-up/sign-in authentication with route
                        protection.
                      </strong>
                      User information is well encrypted both in the front-end
                      and back-end. Unauthorized visits will be redirected.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>CRUD operation.</strong> After login, users can
                      add, save, edit and delete their profiles.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>High performance.</strong> Hotflix utilizes SSG
                      pre- rendering technology which makes it super fast and
                      smooth.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Much more than just a clone.</strong> Hotflix
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
      </ResumeSection> */}
    </>
  );
};

export default Resume;

export async function getStaticProps() {
  return { props: { isHiddenLayout: false } };
}

export const ResumeSection = styled.section`
  padding: 85px 2.5%;
  color: ${({ theme }) => theme.grey};
  p {
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
  ul {
    /* list-style: circle; */
    /* list-style: disc; */
  }
  li {
    display: list-item;
    margin-bottom: 1.8rem;
    font-size: 1.4rem;
  }
  /* position: relative; */
`;
export const ResumeWrapper = styled.div`
  //纸张内容盒子
  box-sizing: border-box;
  position: relative;
  width: 80vw;
  /* width: 210mm;
  height: 297mm; */
  padding: 6vw 5vw;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  border: 1px solid #aaa;
  @media screen and (max-width: 87.5em) {
    width: 90vw;
  }
  @media screen and (max-width: 60em) {
    flex-direction: column;
    gap: 0;
  }
  @media only screen and (max-width: 35em) {
    padding: 4vw 2vw;
    border: 1px solid #aaa;
  }
`;
export const BriefInfo = styled.div`
  flex: 1;
  align-self: center;
  ::before,
  ::after {
    position: absolute;
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 1;
  }
  ::before {
    content: "<";
    /* top: 3%; */
    top: 6vw;
    transform: translateY(-50%);
  }
  ::after {
    content: "/>";
    bottom: 6vw;
    transform: translateY(50%);
  }
  @media screen and (max-width: 60em) {
    ::before,
    ::after {
      display: none;
    }
  }
`;
export const DetailsInfo = styled.div`
  flex: 1;
`;
export const Title = styled.h1`
  margin-bottom: 3.5rem;
  text-transform: uppercase;
  @media only screen and (max-width: 35em) {
    margin-bottom: 2.5rem;
  }
  span {
    display: block;
    font-size: 1.8rem;
    /* font-weight: 400; */
    font-weight: 700;
  }
  span:first-child {
    font-size: 3.5rem;
    transform: scale(1, 1.8);
    transform-origin: 0% 70%;
    letter-spacing: 4px;
  }
  span:nth-child(2) {
    letter-spacing: 7px;
  }
  span:nth-child(3) {
    letter-spacing: 6.2px;
  }
`;
export const CardWrapper = styled.div`
  margin-bottom: 3rem;
`;
export const SubTitle = styled.h2`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  margin-bottom: 1.4rem;
  ::before {
    content: " /";
    margin-right: 8px;
    /* font-weight: 700;
    font-size: 1.4rem; */
  }
  @media print {
    font-size: 1.4rem;
  }
`;
export const ContactList = styled.ul`
  /* list-style: none; */
`;
export const ContactItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;
export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.grey};
  @media print {
    font-size: 1.2rem;
  }
  span:first-child {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    svg {
      fill: ${({ theme }) => theme.secondary};
    }
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* justify-content: flex-start; */
  }
`;
export const TagWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
export const SkillTag = styled.div`
  padding: 3px 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  background-color: ${({ bgColor }) => bgColor};
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  span {
    /* font-size: 1.3rem; */
    font-size: 1.4rem;
    color: #fff;
  }
`;
export const StageItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  @media print {
    font-size: 1.2rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span:first-child {
    font-weight: 700;
  }
  span:nth-child(2) {
    margin-left: auto;
    margin-top: 0.2rem;
  }
  span:last-child {
    display: block;
    margin-top: 0.4rem;
  }
  ::before {
    content: ">>";
    margin-right: 0.5rem;
    /* font-size: 0.1rem; */
  }
`;
export const KeyFeatureListWrapper = styled.div`
  & > span {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 1rem;
    @media print {
      font-size: 1.2rem;
    }
  }
`;
export const KeyFeatureList = styled.ul`
  li {
    display: flex;
    p {
      margin-bottom: 0;
    }
    ::before {
      content: "●";
      margin-right: 1rem;
    }
    /* transform: translateX(15px); */
  }
`;
// export const ContactButton = styled.button``;
// export const ContactDetail = styled.span``;

/*export const TT = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;*/
export const ResumeStyle = createGlobalStyle`
  @media print {
    *{
      color:#000
    }
    @page{
      // 打印纸张样式
      size: A4;
      margin:0.5cm;
      /* margin: 2cm 3cm; */
      /* margin:220px   */
      // this is the default value of margin in print menu selection. if we set 0 here, then the default margin value is 0;
    // 虽然我们打印的是html标签内的内容， 但是此处的margin 设置和在html标签中设置margin仍不一样
    }
    html{
          /* background-color: blue; */

        // do i need this repeate code as @media screen 
        // in fact we don't need it, because i test that we can inherit background color from normall style code or @ media all. but not @media screen
      //print whole page  
     
    }
    body{
          /* width:100%;
        
          aspect-ratio: 21/29.7;// why this is not working
          background-color: green;
          margin: 0 auto; */
          margin: 0 !important;
          /* background-color: #fff !important;  // needed later */
          /* width:21cm;
          height: 29.7cm */
    }
    section{
      padding:0 !important;
      margin:0 !important
    }
    header{display:none}
    footer{display:none !important}
    .resumePage{
      box-sizing: border-box;
      position: relative;
      width: 210mm;
      height: 297mm;
      background:#fff;
      /* padding: 60px 50px; */
      padding: 1cm;
      /* padding: 1.5cm; */
      margin: 0 auto;
      display: flex;
      gap: .8cm;
      /* gap: 4rem; */
      border:none;
    }
    .contactIcon{
      svg{fill:#000 !important}
      
    }

    } 


`;
