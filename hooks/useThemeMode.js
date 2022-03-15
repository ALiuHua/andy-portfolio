import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("lightTheme");
  const setThemeMode = (ThemeMode) => {
    window.localStorage.setItem("theme", ThemeMode);
    setTheme(ThemeMode);
  };
  const toggleTheme = () => {
    theme === "lightTheme"
      ? setThemeMode("darkTheme")
      : setThemeMode("lightTheme");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, toggleTheme };
};

/*import { useState, useEffect } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("lightTheme");
  const setThemeMode = (ThemeMode) => {
    window.localStorage.setItem("theme", ThemeMode);
    setTheme(ThemeMode);
  };
  const toggleTheme = () => {
    //clean code as below
    theme === "lightTheme"
      ? setThemeMode("darkTheme")
      : setThemeMode("lightTheme");
    // setTheme((prevTheme) => {
    //   if (prevTheme === "lightTheme") {
    //     window.localStorage.setItem("theme", "darkTheme");
    //     setTheme("darkTheme");
    //   } else {
    //     window.localStorage.setItem("theme", "lightTheme");
    //     setTheme("lightTheme");
    //   }
    // });
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    // setTheme(localTheme === "undefine" ? lightTheme : localTheme);
    //in this way. we may reduce the page rerender if localTheme not exist.
    localTheme && setTheme(localTheme);
  }, []);
};
 */
