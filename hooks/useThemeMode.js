import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const [userTheme, setUserTheme] = useState("lightTheme");
  const setThemeMode = (ThemeMode) => {
    window.localStorage.setItem("theme", ThemeMode);
    setUserTheme(ThemeMode);
  };
  const toggleTheme = () => {
    userTheme === "lightTheme"
      ? setThemeMode("darkTheme")
      : setThemeMode("lightTheme");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setUserTheme(localTheme);
  }, []);

  return { userTheme, toggleTheme };
};
