import React from "react";
import { Nav, NavLink, Logo, NavList, LinkWrapper, Icon } from "./NavBarStyles";
import ThemeToggler from "./ThemeToggler";
import { useRouter } from "next/router";
import Image from "next/image";
const NavBar = ({ toggleTheme }) => {
  const { pathname } = useRouter();

  return (
    <Nav isHome={pathname === "/"}>
      <Logo>
        <NavLink href="/">
          <img src="/images/favicons/favicon-32x32.png" alt="" />
        </NavLink>
      </Logo>
      <NavList>
        <LinkWrapper>
          <NavLink href="/">
            <span>Home</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="/project">
            <span>Project</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="/about">
            <span>About</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="#">
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>
      </NavList>

      <NavList>
        <LinkWrapper>
          <NavLink href="https://github.com/ALiuHua">
            <Icon src="/icons/github.svg" />
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="www.linkedin.com">
            <Icon src="/icons/linkedin.svg" />
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>
      </NavList>

      <ThemeToggler toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default NavBar;

//   Next Link is also just a element. can also redirect to outside website
//Public files path used in src attribute. can just "/images/...."   just start with /
