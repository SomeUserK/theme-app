import { useState } from 'react';
import { THEMES } from '../constants';
import ThemeContext from './theme-context';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  function toggleTheme() {
    setTheme(prevTheme =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
