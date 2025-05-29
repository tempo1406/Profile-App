import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  // Update theme when system theme changes, but only if using system theme
  useEffect(() => {
    if (isSystemTheme) {
      setIsDarkMode(colorScheme === 'dark');
    }
  }, [colorScheme, isSystemTheme]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    setIsSystemTheme(false); // User has manually set the theme
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
