// src/ThemedContent.tsx
import React from "react";
import { useTheme } from "./ThemeContext"; // Import our custom useTheme hook

function ThemedContent() {
  // Use the custom hook to get the current theme
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        border: `2px solid ${theme === "light" ? "#ccc" : "#555"}`, // Border color changes
        borderRadius: "8px",
        marginTop: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#222", // Background color changes
        color: theme === "light" ? "#333" : "#f0f0f0", // Text color changes
      }}
    >
      <p style={{ fontSize: "1.2em" }}>
        This content is currently in **{theme}** mode.
      </p>
      <p>
        Any component, no matter how deep, can access the theme via
        `useContext`.
      </p>
    </div>
  );
}

export default ThemedContent;
