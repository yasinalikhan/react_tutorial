// src/App.tsx
import { useState } from "react";
import ThemeContext from "./ThemeContext"; // Import the ThemeContext itself
import ThemeToggleButton from "./ThemeToggleButton"; // Import the button component
import ThemedContent from "./ThemedContent"; // Import the content component
import "./App.css"; // Keep your CSS import

function App() {
  // State to manage the current theme ('light' or 'dark')
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Function to toggle the theme state
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // 1. Wrap the entire application (or relevant parts) with ThemeContext.Provider
    // 2. Pass the 'value' prop, which is an object containing the theme state and the toggle function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* This div applies global styling based on the current theme */}
      <div
        style={{
          minHeight: "100vh", // Ensures the background covers the whole viewport
          padding: "20px",
          textAlign: "center",
          // Dynamic background and text color based on the 'theme' state
          backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
          color: theme === "light" ? "#333" : "#f0f0f0",
        }}
      >
        <h1>Context API Theme Switcher</h1>
        <p>This entire area changes based on the theme.</p>
        <hr style={{ borderColor: theme === "light" ? "#ccc" : "#555" }} />

        {/* These components are "consumers" of the context */}
        <ThemeToggleButton />
        <ThemedContent />

        <hr
          style={{
            borderColor: theme === "light" ? "#ccc" : "#555",
            marginTop: "30px",
          }}
        />
        <p
          style={{
            fontSize: "0.8em",
            color: theme === "light" ? "#777" : "#aaa",
          }}
        >
          This demonstrates how Context API allows components at any depth to
          access shared state.
        </p>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
