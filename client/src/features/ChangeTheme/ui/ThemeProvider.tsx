/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = (component: () => React.ReactNode) => () => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      document.body.className = Theme.LIGHT;
    } else {
      document.body.className = theme;
    }
  });
  const themeProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeProps}>
      {component()}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
