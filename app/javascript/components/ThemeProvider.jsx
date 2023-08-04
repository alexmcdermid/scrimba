import React, { useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeProvider = ({ children }) => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
