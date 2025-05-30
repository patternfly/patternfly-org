import { useState, useEffect, useCallback } from 'react';

const THEME_MODES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

const THEME_STORAGE_KEY = 'theme-preference';
const DARK_MODE_CLASS = 'pf-v6-theme-dark';

export const useTheme = () => {
  const getStoredThemeMode = () => {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return localStorage.getItem(THEME_STORAGE_KEY);
  };

  const setStoredThemeMode = (mode) => {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  const getResolvedTheme = (mode) => {
    if (typeof window === 'undefined') return 'light';
    if (mode === THEME_MODES.SYSTEM) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return mode;
  };

  const updateThemeClass = (resolvedTheme) => {
    if (typeof window === 'undefined') return;
    const htmlElement = document.querySelector('html');
    if (resolvedTheme === 'dark') {
      htmlElement.classList.add(DARK_MODE_CLASS);
    } else {
      htmlElement.classList.remove(DARK_MODE_CLASS);
    }
  };

  const [themeMode, setThemeModeState] = useState(() => {
    const stored = getStoredThemeMode();
    return stored && Object.values(THEME_MODES).includes(stored) ? stored : THEME_MODES.SYSTEM;
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => getResolvedTheme(themeMode));

  const setThemeMode = useCallback((newMode) => {
    setThemeModeState(newMode);
    setStoredThemeMode(newMode);
    
    const newResolvedTheme = getResolvedTheme(newMode);
    setResolvedTheme(newResolvedTheme);
    updateThemeClass(newResolvedTheme);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      if (themeMode === THEME_MODES.SYSTEM) {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(newSystemTheme);
        updateThemeClass(newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [themeMode]);

  // Initial theme application
  useEffect(() => {
    const initialResolvedTheme = getResolvedTheme(themeMode);
    setResolvedTheme(initialResolvedTheme);
    updateThemeClass(initialResolvedTheme);
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
    resolvedTheme,
    THEME_MODES
  };
};

export { THEME_MODES }; 