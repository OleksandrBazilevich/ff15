import { useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface IUseTheme {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): IUseTheme => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = theme;
  };

  return {
    toggleTheme,
    theme
  };
};
