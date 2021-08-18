import React, { useEffect, useState, createContext } from 'react';

export const themeStatusContext = createContext();

export default function ThemeStatusProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const $html = document.documentElement;
    $html.classList.toggle('dark');
    localStorage.setItem('dark', !dark);
    setDark(!dark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('dark');
    if (isDark && isDark === 'true') toggleTheme();
  }, []);

  return (
    <themeStatusContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </themeStatusContext.Provider>
  );
}
