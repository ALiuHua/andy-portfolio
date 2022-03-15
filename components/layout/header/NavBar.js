import React from "react";
import { Nav, NavLink, Logo, NavList, LinkWrapper, Icon } from "./NavBarStyles";
import ThemeToggler from "./ThemeToggler";
const NavBar = ({ toggleTheme }) => {
  return (
    <Nav>
      <Logo>
        <NavLink href="/">
          <img src="/images/favicons/favicon-32x32.png" />
        </NavLink>
      </Logo>
      <NavList>
        <LinkWrapper>
          <NavLink href="/">
            <span>Home</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="/">
            <span>Project</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="/">
            <span>About</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink href="/">
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>
      </NavList>

      <NavList>
        <LinkWrapper>
          <NavLink href="https://github.com">
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
