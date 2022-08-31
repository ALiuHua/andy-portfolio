import styled from "styled-components";
import { NavLink } from "../layout/header/NavBarStyles";
export const HeroSection = styled.section`
  padding: 0 2.5vw;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;
export const HeroWrapper = styled.div`
  padding: 3.5rem 2.5rem;
  width: 97%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-size: clamp(1.6rem, 2vw, 2rem);
    color: ${({ theme }) => theme.grey};
    margin-top: 2.2rem;
    line-height: 1.7;
  }
`;

export const PrimaryHeading = styled.h1`
  margin-bottom: 2.2rem;
  font-size: clamp(4rem, 4vw, 7rem);
  line-height: 1.1;
  color: ${({ theme }) => theme.title};
  font-family: "Bogart";
`;

export const LinkButtonWrapper = styled(NavLink)`
  width: 12rem;
  background-color: ${({ theme }) => theme.aboutLine};
  border-radius: 100px;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SocialButtons = styled.div`
  display: none;
  @media only screen and (max-width: 53em) {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
  }
`;
