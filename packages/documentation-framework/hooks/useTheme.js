import { useState, useEffect, useCallback } from 'react';

const THEME_MODES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

const THEME_STORAGE_KEY = 'theme-preference';
const DARK_MODE_CLASS = 'pf-v6-theme-dark';

/**
 * Custom hook for managing theme state with system preference detection
 * @returns {Object} Theme state and controls
 * @returns {string} themeMode - Current theme mode ('system'|'light'|'dark')
 * @returns {Function} setThemeMode - Function to change theme mode
 * @returns {string} resolvedTheme - The actual applied theme ('light'|'dark')
 * @returns {Object} THEME_MODES - Available theme mode constants
 */
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
    // SSR-safe check for window and matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) return 'light';
    
    if (mode === THEME_MODES.SYSTEM) {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } catch (error) {
        // Fallback if matchMedia fails
        console.warn('matchMedia not supported, defaulting to light theme');
        return 'light';
      }
    }
    return mode;
  };

  const updateThemeClass = (resolvedTheme) => {
    if (typeof window === 'undefined' || !document) return;
    
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;
    
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
    // Enhanced SSR-safe check
    if (typeof window === 'undefined' || !window.matchMedia) return;

    let mediaQuery;
    try {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    } catch (error) {
      console.warn('matchMedia not supported, skipping system theme detection');
      return;
    }
    
    const handleSystemThemeChange = (e) => {
      if (themeMode === THEME_MODES.SYSTEM) {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(newSystemTheme);
        updateThemeClass(newSystemTheme);
      }
    };

    // Check if addEventListener is available (some older browsers might not support it)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    } else if (mediaQuery.addListener) {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
      return () => {
        mediaQuery.removeListener(handleSystemThemeChange);
      };
    }
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