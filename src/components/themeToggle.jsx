import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa"; // Icons for dark/light mode
import "../styles/themeToggle.css"; 

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
