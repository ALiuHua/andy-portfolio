import styled, { ThemeProvider } from "styled-components";
export const HeroSection = styled.section`
  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.grey};
  }
  h2 {
    font-size: 3.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.title};
  }
`;
export const HeroContainer = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-size: 7rem;
    color: ${({ theme }) => theme.title};
  }
  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.grey};
  }
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
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: ${({ layout }) => (layout ? layout : "row")};
  gap: 3rem;
  align-items: center;
  /* @media only screen and (max-width: ${({ theme: { media } }) => media.sm}) {
    flex-direction: ${({ layout }) => (layout ? layout : "column")};
  } */
`;
export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* img {
    width: 85%;
  } */
`;
export const DescriptionContainer = styled.div`
  flex: 1;
`;
