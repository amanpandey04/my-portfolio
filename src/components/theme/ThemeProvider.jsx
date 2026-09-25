import { useEffect, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "portfolio-light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "portfolio-light" ? "portfolio-dark" : "portfolio-light";

      // Apply the page theme immediately,
      // before React re-renders the toggle.
      document.documentElement.dataset.theme = nextTheme;

      localStorage.setItem("theme", nextTheme);

      return nextTheme;
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
