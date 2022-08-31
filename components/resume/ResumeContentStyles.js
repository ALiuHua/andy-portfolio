import styled, { createGlobalStyle } from "styled-components";
export const ResumeSection = styled.section`
  padding: 85px 2.5%;
  color: ${({ theme }) => theme.grey};
  font-size: clamp(1.4rem, 1.4vw, 1.8rem);
  p {
    margin-bottom: 2rem;
  }
  li {
    display: list-item;
    margin-bottom: 1.8rem;
  }
  button {
    font-size: inherit;
  }
`;
export const ResumeWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 80vw;
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
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
  }
  ::before {
    content: "<";
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
  }
`;
export const ContactList = styled.ul``;
export const ContactItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 0.4rem;
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
    font-size: 1.4rem;
    color: ${({ color }) => color || "#fff"};
  }
`;
export const StageItem = styled.div`
  display: flex;
  margin-bottom: 1.4rem;
  div {
    display: flex;
    flex-direction: column;
  }
  span:first-child {
    font-weight: 400;
  }
  span:nth-child(2) {
    margin-left: auto;
    margin-top: 0.2rem;
  }
  span:last-child {
    display: block;
    margin-top: 0.3rem;
  }
  ::before {
    content: ">>";
    margin-right: 0.5rem;
  }
`;
export const KeyFeatureListWrapper = styled.div`
  & > span {
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
    margin-bottom: 1.4rem;
    p {
      margin-bottom: 0;
    }
    ::before {
      content: "●";
      margin-right: 1rem;
    }
  }
`;

export const ResumeStyle = createGlobalStyle`
  @media print {
    *{
      color:#000
    }
    @page{
      size: A4;
      margin:0.5cm;
    }
    body{
          margin: 0 !important;
          background-color: #fff !important;     
    }
    section{
      padding:0 !important;
      margin:0 !important;
      h2{font-size:12pt !important;}
      ul,span, p{font-size:10pt !important}
      a{font-size:10pt !important}
      h1{
        span {
          font-size: 16pt !important;
  }
  span:first-child {
    font-size: 25pt !important;
 
  }
      }
    }
    header{display:none}
    footer{display:none !important}
    .resumePage{
      box-sizing: border-box;
      position: relative;
      width: 210mm !important;
      height: 297mm !important;
      background:#fff;
      padding: 1cm;
      margin: 0 auto;
      display: flex;
      gap: .8cm;
      border:none;
    }
    .contactIcon{
      svg{fill:#000 !important}
      
    }
    .contactList{
    li:last-child{
      display: none;
    }
    }
  } 
`;
