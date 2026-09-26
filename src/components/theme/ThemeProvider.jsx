import { useLayoutEffect, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "portfolio-light",
  );

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    document.documentElement.classList.add("theme-changing");

    setTheme((currentTheme) =>
      currentTheme === "portfolio-light" ? "portfolio-dark" : "portfolio-light",
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("theme-changing");
      });
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
