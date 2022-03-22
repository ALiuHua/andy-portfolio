import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/Theme";
import { useThemeMode } from "../../hooks/useThemeMode";
import { useRouter } from "next/router";
import { Birds } from "../home/Birds";
const Layout = ({ children }) => {
  const { theme, toggleTheme } = useThemeMode();
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {currentPath === "/" && <Birds theme={theme} />}
      <header style={{ zIndex: 2 }}>
        <NavBar toggleTheme={toggleTheme} />
      </header>
      <main style={{ zIndex: 1 }}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
// here is an issue that: we need to setup localStorage and setState. Because they
//are at same handler that we can't trust the state at once because its updated asynclly.
// so we need to set localstorage separatly with fixed value insted of just use state variable
//insert birds component here is a better solution because we can pass theme props easily and can easily
//set this up in other page if we want.
