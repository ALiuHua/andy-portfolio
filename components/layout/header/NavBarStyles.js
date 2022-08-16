import styled, { css } from "styled-components";
import Link from "next/link";
import { Children } from "react";
/*css can be used to import a piese of css code; because we are in the ``; we can use */
export const NavList = styled.ul`
  display: flex;
  &:nth-child(2) {
    margin-right: auto;
  }
  /* @media only screen and (max-width: 72.5em) {
    &:nth-child(3) {
      display: none;
    }
  } */
`;
export const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0 1%;
  /* padding: 0 2.5vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 53em) {
    & > ul:nth-of-type(2) {
      display: none;
    }
  }
  ${({ isHome }) =>
    isHome &&
    css`
      background-color: transparent;
    `}
`;
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 3.5rem;
  }
  @media only screen and (max-width: 53em) {
    display: none;
  }
  /* @media only screen and (max-width: 72.5em) {
    display: none;
  } */
`;

//why we want make this styled-component; because it can be self contained.
export const LinkWrapper = styled.li`
  /* cursor: pointer; */
`;

const StyledLink = ({ className, children, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);
// do we need to have span for a element text??????????
export const NavLink = styled(StyledLink)`
  color: ${({ theme }) => theme.secondary};

  padding: 2.5rem 3.5rem;
  display: flex;
  align-items: center;
  /* a {
    cursor: pointer;
  } */
  /* span {
    position: relative;
  } */
  @media only screen and (max-width: 87.5em) {
    padding: 2.5rem 1.5rem;
  }
  /* @media only screen and (max-width: 28em) {
    padding: 2.5rem 2.5rem;
  } */
`;

export const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  display: block;
`;
