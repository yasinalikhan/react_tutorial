// src/ThemeContext.tsx
import { createContext, useContext } from "react";

// 1. Define the type for the value that our Context will provide
interface ThemeContextType {
  theme: "light" | "dark"; // The current theme state
  toggleTheme: () => void; // A function to toggle the theme
}

// 2. Create the Context
// We provide a default value. This value is used if a component tries to
// consume the context without a Provider above it in the tree.
// For functions, it's common to provide an empty function for safety.
const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // Default theme
  toggleTheme: () => {
    console.warn("toggleTheme was called without a ThemeProvider!");
  },
});

// 3. Create a custom hook for easy consumption of the context
// This abstracts away the direct call to useContext, making it cleaner
// to use in components.
export const useTheme = () => useContext(ThemeContext);

// Export the context itself (mainly used by the Provider)
export default ThemeContext;
