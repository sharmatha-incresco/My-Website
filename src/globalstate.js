import { useState } from 'react';

export let darktheme = false;
export const setIsDarktheme = (value) => {
  darktheme = value;
};

export const useDarktheme = () => {
  const [theme, setTheme] = useState(darktheme);

  const toggleTheme = () => {
    const newTheme = !theme;
    setIsDarktheme(newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};
