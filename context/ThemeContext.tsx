import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
  isDark: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') {
    return true;
  }
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'dark' : true;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setIsDark(initialTheme);
    const themeValue = initialTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeValue);
    isInitialMount.current = false;
  }, []);

  useEffect(() => {
    if (isInitialMount.current) return;
    const themeValue = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', themeValue);
    document.documentElement.setAttribute('data-theme', themeValue);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context || defaultTheme;
};
