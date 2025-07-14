// src/ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "./ThemeContext"; // Import our custom useTheme hook

function ThemeToggleButton() {
  // Use the custom hook to get the current theme and the toggle function
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "1em",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#007bff" : "#6c757d", // Button color changes with theme
        color: "white",
        border: "none",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggleButton;
