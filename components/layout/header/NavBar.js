import React from "react";
import { Nav, NavLink, Logo, NavList, LinkWrapper, Icon } from "./NavBarStyles";
import ThemeToggler from "./ThemeToggler";
import { useRouter } from "next/router";
// import Image from "next/image";
import { useBotContext } from "../../store/bot-context";
const NavBar = ({ toggleTheme, theme }) => {
  const { pathname } = useRouter();
  const { openBotUI, tbotRef } = useBotContext();

  return (
    <Nav isHome={pathname === "/"}>
      <Logo>
        <NavLink href="/">
          <img
            src={`${
              theme === "lightTheme"
                ? "/images/brand/logo.svg"
                : "/images/brand/logo-dark.svg"
            }`}
            alt=""
          />
        </NavLink>
      </Logo>
      <NavList>
        {pathname === "/" ? (
          <LinkWrapper>
            <NavLink href="/project">
              <span>Project</span>
            </NavLink>
          </LinkWrapper>
        ) : (
          <LinkWrapper>
            <NavLink href="/">
              <span>Home</span>
            </NavLink>
          </LinkWrapper>
        )}

        <LinkWrapper>
          <NavLink href="/about">
            <span>About</span>
          </NavLink>
        </LinkWrapper>
        <LinkWrapper ref={tbotRef} onClick={openBotUI}>
          <NavLink href="#">
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>
      </NavList>

      <NavList>
        <LinkWrapper>
          <NavLink href="https://github.com/ALiuHua">
            <Icon
              src={`${
                theme === "lightTheme"
                  ? "/icons/github.svg"
                  : "/icons/github-dark.svg"
              }`}
            />
            <span>Contact</span>
          </NavLink>
        </LinkWrapper>

        <LinkWrapper>
          <NavLink href="https://github.com/ALiuHua">
            <Icon
              src={`${
                theme === "lightTheme"
                  ? "/icons/linkedin.svg"
                  : "/icons/linkedin-dark.svg"
              }`}
            />
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
