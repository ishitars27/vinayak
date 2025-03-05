import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // ✅ Ensure localStorage theme is correctly read as boolean
  const getInitialTheme = () => localStorage.getItem("theme") === "dark";

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply dark mode and save preference
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
