import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/Theme";
import { useThemeMode } from "../../hooks/useThemeMode";
const Layout = ({ children }) => {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header>
        <NavBar toggleTheme={toggleTheme} />
      </header>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
// here is an issue that: we need to setup localStorage and setState. Because they
//are at same handler that we can't trust the state at once because its updated asynclly.
// so we need to set localstorage separatly with fixed value insted of just use state variable
