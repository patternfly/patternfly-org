import { useState, useEffect } from 'react';

const COLOR_MODES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

const HIGH_CONTRAST_MODES = {
  SYSTEM: 'high-contrast-system',
  ON: 'high-contrast-on',
  OFF: 'high-contrast-off'
};

export const THEME_TYPES = {
  COLOR: 'color',
  HIGH_CONTRAST: 'high-contrast'
};

class ThemeManager {
  constructor({ storageKey, modes, defaultMode, cssClass, classEnabledMode, mediaQueryString }) {
    this.storageKey = storageKey;
    this.modes = modes;
    this.defaultMode = defaultMode;
    this.cssClass = cssClass;
    this.classEnabledMode = classEnabledMode;
    this.mediaQueryString = mediaQueryString;
    this.isBrowser = typeof window !== 'undefined' && window.matchMedia && window.localStorage;
  }

  getMediaQuery() {
    if (!this.isBrowser) {
      return;
    }
    return window.matchMedia(this.mediaQueryString);
  }

  getStoredValue() {
    if (!this.isBrowser) {
      return;
    }
    return localStorage.getItem(this.storageKey);
  }

  setStoredValue(value) {
    if (!this.isBrowser) {
      return;
    }
    localStorage.setItem(this.storageKey, value);
  }

  resolve() {
    if (!this.isBrowser) {
      return this.defaultMode;
    }

    if (window.matchMedia(this.mediaQueryString).matches) {
      return this.classEnabledMode;
    }
    return this.defaultMode;
  }

  addClass() {
    if (!this.isBrowser) {
      return;
    }
    document.querySelector('html').classList.add(this.cssClass);
  }

  removeClass() {
    if (!this.isBrowser) {
      return;
    }
    document.querySelector('html').classList.remove(this.cssClass);
  }

  updateClass(mode) {
    if (!this.isBrowser) {
      return;
    }

    if (mode === this.modes.SYSTEM) {
      if (this.resolve() === this.classEnabledMode) {
        this.addClass();
      } else {
        this.removeClass();
      }
    } else {
      if (mode === this.classEnabledMode) {
        this.addClass();
      } else {
        this.removeClass();
      }
    }
  }
}

const themeRegistry = new Map();

const registerThemeManager = (themeType, manager) => {
  themeRegistry.set(themeType, manager);
};

const colorThemeManager = new ThemeManager({
  storageKey: 'theme-preference',
  modes: COLOR_MODES,
  defaultMode: COLOR_MODES.SYSTEM,
  cssClass: 'pf-v6-theme-dark',
  classEnabledMode: COLOR_MODES.DARK,
  mediaQueryString: '(prefers-color-scheme: dark)'
});

const highContrastThemeManager = new ThemeManager({
  storageKey: 'high-contrast-preference',
  modes: HIGH_CONTRAST_MODES,
  defaultMode: HIGH_CONTRAST_MODES.SYSTEM,
  cssClass: 'pf-v6-theme-high-contrast',
  classEnabledMode: HIGH_CONTRAST_MODES.ON,
  mediaQueryString: '(prefers-contrast: more)'
});

registerThemeManager(THEME_TYPES.COLOR, colorThemeManager);
registerThemeManager(THEME_TYPES.HIGH_CONTRAST, highContrastThemeManager);

/**
 * Unified theme hook that accepts a theme type parameter
 * @param {string} themeType - The type of theme to manage (THEME_TYPES.COLOR, THEME_TYPES.HIGH_CONTRAST, instantiate and register new themes above as needed)
 * @returns {Object} Theme state and controls specific to the theme type
 */
export const useTheme = (themeType) => {
  if (!themeType) {
    throw new Error('useTheme requires a theme type parameter. Use THEME_TYPES.COLOR or THEME_TYPES.HIGH_CONTRAST');
  }

  const theme = themeRegistry.get(themeType);

  if (!theme) {
    throw new Error(`Theme manager not found for theme type: ${themeType}`);
  }

  const [mode, setMode] = useState(theme.getStoredValue());
  const [resolvedTheme, setResolvedTheme] = useState(theme.resolve());

  useEffect(() => {
    theme.setStoredValue(mode);
    theme.updateClass(mode);
  }, [theme, mode, resolvedTheme]);

  const handlePreferenceChange = () => {
    setResolvedTheme(theme.resolve());
  };
  const mediaQuery = theme.getMediaQuery();

  useEffect(() => {
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handlePreferenceChange);
      return () => {
        mediaQuery.removeEventListener('change', handlePreferenceChange);
      };
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handlePreferenceChange);
      return () => {
        mediaQuery.removeListener(handlePreferenceChange);
      };
    }
  }, [mediaQuery]);

  return {
    mode,
    setMode,
    resolvedTheme,
    modes: theme.modes
  };
};
