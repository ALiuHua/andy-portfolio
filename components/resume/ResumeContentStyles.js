import styled, { createGlobalStyle } from "styled-components";
export const ResumeSection = styled.section`
  padding: 85px 2.5%;
  color: ${({ theme }) => theme.grey};
  font-size: clamp(1.4rem, 1.4vw, 1.8rem);
  p {
    margin-bottom: 2rem;
    /* font-size: 1.4rem; */
  }
  ul {
    /* list-style: circle; */
    /* list-style: disc; */
  }
  li {
    display: list-item;
    margin-bottom: 1.8rem;
    /* font-size: 1.4rem; */
  }
  button {
    font-size: inherit;
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
    font-size: 6rem;
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
  /* @media print {
    font-size: 1.4rem;
  } */
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

export const TagWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  /* li {
    margin-bottom: 0;
  } */
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
    color: ${({ color }) => color || "#fff"};
  }
`;
export const StageItem = styled.div`
  display: flex;
  margin-bottom: 1.4rem;
  /* font-size: 1.4rem; */
  /* @media print {
    font-size: 1.2rem;
  } */
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
    /* font-size: 0.1rem; */
  }
`;
export const KeyFeatureListWrapper = styled.div`
  & > span {
    /* font-size: 1.4rem; */
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
    /* transform: translateX(15px); */
  }
`;

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
      /* margin: 0 !important; */
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
    .contactList{
    li:last-child{
      display: none;
    }
    }
  } 


`;
