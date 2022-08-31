import styled, { ThemeProvider } from "styled-components";
export const HeroSection = styled.section`
  /* overflow-y: auto; */
  p,
  ul {
    font-size: clamp(1.6rem, 2vw, 2rem);
    color: ${({ theme }) => theme.grey};
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.5;
    color: ${({ theme }) => theme.title};
  }
`;
export const HeroContainer = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  /* -webkit-scroll-margin-top: 8rem; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 53em) {
    width: 75%;
    height: 70vh;
  }

  h1 {
    font-size: clamp(5rem, 5vw, 8rem);
    color: ${({ theme }) => theme.title};
    margin-bottom: 2.5rem;
    /* @media only screen and (max-width: 53em) {
      font-size: 6rem;
    } */
  }
  /* p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.grey};
  } */
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0rem;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
      content: "╲╱";
      font-size: 3rem;
      letter-spacing: -1.5px;
      color: ${({ theme }) => theme.secondary};
      animation: downArrow 1.2s cubic-bezier(0.68, -1.43, 0.72, 0.24) infinite;
    }

    @keyframes downArrow {
      0% {
        transform: translateY(-12px);
      }
      25%,
      75% {
        transform: translateY(-12px);
      }
      50% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-12px);
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 70%;
  margin: 8rem auto;
  display: flex;
  flex-direction: ${({ layout }) => (layout ? layout : "row")};
  gap: 3rem;
  align-items: center;
  /* @media only screen and (max-width: ${({ theme: { media } }) => media.sm}) {
    flex-direction: ${({ layout }) => (layout ? layout : "column")};
  } */
  /* @media only screen and (max-width: 72.5em) {
    flex-direction: column-reverse;
    width: 80%;
    margin: 9rem auto;
  } */
  @media only screen and (max-width: 53em) {
    flex-direction: column-reverse;
    width: 85%;
    margin: 0 auto 9rem;
  }
`;
export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* img {
    width: 85%;
  } */
  @media only screen and (max-width: 72.5em) {
    img {
      display: block;
      width: 85%;
    }
  }
  /* @media only screen and (max-width: 53em) {
    img {
      width: 85%;
    }
  } */
`;
export const DescriptionContainer = styled.div`
  flex: 1;
  /* font-size: 1.8rem; */
  h2 {
    margin-bottom: 2.5rem;
  }
  p {
  }
  ul {
    li {
      display: flex;
      gap: 0.8rem;
      position: relative;
      margin-bottom: 1rem;
      ::before {
        content: "➣";
        /* position: absolute; */
        color: ${({ theme }) => theme.arrow};
      }
    }
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-block;
  padding: 0.7rem 1.8rem;
  background-color: ${({ theme }) => theme.aboutResume};
  border-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;

  :hover {
    transform: scale(1.05);

    box-shadow: 0 1rem 2rem rgb(0 0 0 / 0.1);
  }
  a {
    display: inline-block;
    text-transform: uppercase;
    font-size: clamp(0.8rem, 1vw, 1.2rem);
  }
`;
