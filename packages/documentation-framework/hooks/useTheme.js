import { useState, useEffect, useCallback } from 'react';

const THEME_MODES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

export const HIGH_CONTRAST_THEME_MODES = {
  SYSTEM: 'high-contrast-system',
  ON: 'high-contrast-on',
  OFF: 'high-contrast-off'
};

const THEME_STORAGE_KEY = 'theme-preference';
const DARK_MODE_CLASS = 'pf-v6-theme-dark';

const HIGH_CONTRAST_STORAGE_KEY = 'high-contrast-preference';
const HIGH_CONTRAST_MODE_CLASS = 'pf-v6-theme-high-contrast';

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
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return localStorage.getItem(THEME_STORAGE_KEY);
  };

  const getStoredHighContrastMode = () => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return localStorage.getItem(HIGH_CONTRAST_STORAGE_KEY);
  };

  const setStoredThemeMode = (mode) => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  const setStoredHighContrastMode = (mode) => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    localStorage.setItem(HIGH_CONTRAST_STORAGE_KEY, mode);
  };

  const getResolvedTheme = (mode) => {
    // SSR-safe check for window and matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) {
      return 'light';
    }
    
    if (mode === THEME_MODES.SYSTEM) {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } catch (error) {
        // Fallback if matchMedia fails
        console.warn('matchMedia not supported, defaulting to light theme');
        return 'light';
      }
    }

    if (mode === HIGH_CONTRAST_THEME_MODES.SYSTEM) {
      try {
        const { ON, OFF } = HIGH_CONTRAST_THEME_MODES;
        return window.matchMedia('(prefers-contrast: more)').matches ? ON : OFF;
      } catch (error) {
        // Fallback if matchMedia fails
        console.warn('matchMedia not supported, defaulting to high contrast off');
        return OFF;
      }
    }

    return mode;
  };

  const updateThemeClass = (resolvedTheme) => {
    if (typeof window === 'undefined' || !document) {
      return;
    }
    
    const htmlElement = document.querySelector('html');
    if (!htmlElement) {
      return;
    }
    
    if (resolvedTheme === 'dark') {
      htmlElement.classList.add(DARK_MODE_CLASS);
    } else if (resolvedTheme === 'light') {
      htmlElement.classList.remove(DARK_MODE_CLASS);
    }

    if (resolvedTheme === HIGH_CONTRAST_THEME_MODES.ON) {
      htmlElement.classList.add(HIGH_CONTRAST_MODE_CLASS);
    } else if (resolvedTheme === HIGH_CONTRAST_THEME_MODES.OFF) {
      htmlElement.classList.remove(HIGH_CONTRAST_MODE_CLASS);
    }
  };

  const [themeMode, setThemeModeState] = useState(() => {
    const stored = getStoredThemeMode();
    return stored && Object.values(THEME_MODES).includes(stored) ? stored : THEME_MODES.SYSTEM;
  });

  const [highContrastMode, setHighContrastModeState] = useState(() => {
    const stored = getStoredHighContrastMode();
    return stored && Object.values(HIGH_CONTRAST_THEME_MODES).includes(stored) ? stored : HIGH_CONTRAST_THEME_MODES.SYSTEM;
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => getResolvedTheme(themeMode));
  const [resolvedHighContrastTheme, setResolvedHighContrastTheme] = useState(() => getResolvedTheme(highContrastMode));

  const setThemeMode = useCallback((newMode) => {
    setThemeModeState(newMode);
    setStoredThemeMode(newMode);
    
    const newResolvedTheme = getResolvedTheme(newMode);
    setResolvedTheme(newResolvedTheme);
    updateThemeClass(newResolvedTheme);
  }, []);

  const setHighContrastMode = useCallback((newMode) => {
    setHighContrastModeState(newMode);
    setStoredHighContrastMode(newMode);
    
    const newResolvedHighContrastTheme = getResolvedTheme(newMode);
    setResolvedHighContrastTheme(newResolvedHighContrastTheme);
    updateThemeClass(newResolvedHighContrastTheme);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    // Enhanced SSR-safe check
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

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

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    let mediaQuery;
    try {
      mediaQuery = window.matchMedia('(prefers-contrast: more)');
    } catch (error) {
      console.warn('matchMedia not supported, skipping high contrast theme detection');
      return;
    }

    const handleHighContrastThemeChange = (e) => {
      if (highContrastMode === HIGH_CONTRAST_THEME_MODES.SYSTEM) {
        const newHighContrastTheme = e.matches ? HIGH_CONTRAST_THEME_MODES.ON : HIGH_CONTRAST_THEME_MODES.OFF;
        setResolvedHighContrastTheme(newHighContrastTheme);
        updateThemeClass(newHighContrastTheme);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleHighContrastThemeChange);
      return () => {
        mediaQuery.removeEventListener('change', handleHighContrastThemeChange);
      };
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleHighContrastThemeChange);
      return () => {
        mediaQuery.removeListener(handleHighContrastThemeChange);
      };
    }
  }, [highContrastMode]);

  // Initial theme application
  useEffect(() => {
    const initialResolvedTheme = getResolvedTheme(themeMode);
    setResolvedTheme(initialResolvedTheme);
    updateThemeClass(initialResolvedTheme);

    const initialResolvedHighContrastTheme = getResolvedTheme(highContrastMode);
    setResolvedHighContrastTheme(initialResolvedHighContrastTheme);
    updateThemeClass(initialResolvedHighContrastTheme);
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
    resolvedTheme,
    THEME_MODES,
    HIGH_CONTRAST_THEME_MODES,
    highContrastMode,
    setHighContrastMode,
    resolvedHighContrastTheme
  };
}; 