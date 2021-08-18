import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const themeStatusContext = createContext();

export default function ThemeStatusProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const $html = document.documentElement;
    if (theme === "light") $html.classList.remove("dark");
    else $html.classList.add("dark");
  }, [theme]);

  return (
    <themeStatusContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeStatusContext.Provider>
  );
}
