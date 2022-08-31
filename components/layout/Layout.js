import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/Theme";
import { useThemeMode } from "../../hooks/useThemeMode";
import { useRouter } from "next/router";
import { Birds } from "../home/Birds";
import BotContextProvider from "../store/bot-context";
import Script from "next/script";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  const { userTheme, toggleTheme } = useThemeMode();
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="beforeInteractive"
      ></Script>
      <BotContextProvider>
        <ThemeProvider
          theme={
            userTheme === "lightTheme"
              ? { ...lightTheme, themeName: userTheme }
              : { ...darkTheme, themeName: userTheme }
          }
        >
          <GlobalStyles />
          {currentPath === "/" && <Birds userTheme={userTheme} />}
          <header style={{ zIndex: 2 }}>
            <NavBar toggleTheme={toggleTheme} userTheme={userTheme} />
          </header>
          <main style={{ zIndex: 1 }}>{children}</main>
          <Footer style={{ zIndex: 2 }} />
        </ThemeProvider>
      </BotContextProvider>
    </>
  );
};

export default Layout;
