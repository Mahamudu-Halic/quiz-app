"use client";

import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  setTheme: (theme: string) => void; // Define a setter function for theme
  theme: string;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = { theme, setTheme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
