import { useState, useEffect } from 'react';

const COLOR_MODES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

const CONTRAST_MODES = {
  SYSTEM: 'contrast-system',
  DEFAULT: 'contrast-default',
  HIGH_CONTRAST: 'contrast-high',
  GLASS: 'contrast-glass'
};

const THEME_VARIANT_MODES = {
  DEFAULT: 'theme-default',
  UNIFIED: 'theme-unified'
};

export const THEME_TYPES = {
  COLOR: 'color',
  CONTRAST: 'contrast',
  THEME_VARIANT: 'theme-variant'
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
    const storedValue = localStorage.getItem(this.storageKey);
    return storedValue || this.defaultMode;
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

  getHtmlElement() {
    if (!this.isBrowser) {
      return null;
    }
    return document.querySelector('html');
  }

  addClass() {
    const htmlElement = this.getHtmlElement();
    if (htmlElement && !htmlElement.classList.contains(this.cssClass)) {
      htmlElement.classList.add(this.cssClass);
    }
  }

  removeClass() {
    const htmlElement = this.getHtmlElement();
    if (htmlElement && htmlElement.classList.contains(this.cssClass)) {
      htmlElement.classList.remove(this.cssClass);
    }
  }

  updateClass() {
    if (!this.isBrowser) {
      return;
    }

    // ALWAYS read from localStorage to ensure we have the correct mode for THIS theme
    const storedMode = this.getStoredValue();

    // Validate that the stored mode is valid for this theme
    const validModes = Object.values(this.modes);
    if (!validModes.includes(storedMode)) {
      console.error(`[${this.storageKey}] Invalid stored mode "${storedMode}". Valid modes:`, validModes);
      return;
    }

    const shouldHaveClass = storedMode === this.modes.SYSTEM
      ? this.resolve() === this.classEnabledMode
      : storedMode === this.classEnabledMode;

    if (shouldHaveClass) {
      this.addClass();
    } else {
      this.removeClass();
    }
  }
}

class ContrastThemeManager extends ThemeManager {
  constructor({ storageKey, modes, defaultMode, mediaQueryString }) {
    super({
      storageKey,
      modes,
      defaultMode,
      cssClass: 'pf-v6-theme-high-contrast',
      classEnabledMode: modes.HIGH_CONTRAST,
      mediaQueryString
    });
    this.glassClass = 'pf-v6-theme-glass';
  }

  updateClass() {
    if (!this.isBrowser) {
      return;
    }

    const htmlElement = this.getHtmlElement();
    if (!htmlElement) {
      return;
    }

    // ALWAYS read from localStorage to ensure we have the correct mode for THIS theme
    const storedMode = this.getStoredValue();

    // Determine which class should be applied based on stored mode
    let shouldHaveHighContrast = false;
    let shouldHaveGlass = false;

    if (storedMode === this.modes.SYSTEM) {
      shouldHaveHighContrast = window.matchMedia(this.mediaQueryString).matches;
    } else if (storedMode === this.modes.HIGH_CONTRAST) {
      shouldHaveHighContrast = true;
    } else if (storedMode === this.modes.GLASS) {
      shouldHaveGlass = true;
    }
    // DEFAULT mode: both false

    // Apply high contrast class
    if (shouldHaveHighContrast && !htmlElement.classList.contains(this.cssClass)) {
      htmlElement.classList.add(this.cssClass);
    } else if (!shouldHaveHighContrast && htmlElement.classList.contains(this.cssClass)) {
      htmlElement.classList.remove(this.cssClass);
    }

    // Apply glass class
    if (shouldHaveGlass && !htmlElement.classList.contains(this.glassClass)) {
      htmlElement.classList.add(this.glassClass);
    } else if (!shouldHaveGlass && htmlElement.classList.contains(this.glassClass)) {
      htmlElement.classList.remove(this.glassClass);
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

const themeVariantManager = new ThemeManager({
  storageKey: 'theme-variant-preference',
  modes: THEME_VARIANT_MODES,
  defaultMode: THEME_VARIANT_MODES.DEFAULT,
  cssClass: 'pf-v6-theme-redhat',
  classEnabledMode: THEME_VARIANT_MODES.UNIFIED,
  mediaQueryString: '(prefers-color-scheme: dark)' // Not used for variant, but required
});

const contrastThemeManager = new ContrastThemeManager({
  storageKey: 'contrast-preference',
  modes: CONTRAST_MODES,
  defaultMode: CONTRAST_MODES.SYSTEM,
  mediaQueryString: '(prefers-contrast: more)'
});

registerThemeManager(THEME_TYPES.COLOR, colorThemeManager);
registerThemeManager(THEME_TYPES.THEME_VARIANT, themeVariantManager);
registerThemeManager(THEME_TYPES.CONTRAST, contrastThemeManager);

/**
 * Unified theme hook that accepts a theme type parameter
 * @param {string} themeType - The type of theme to manage (THEME_TYPES.COLOR, THEME_TYPES.CONTRAST, THEME_TYPES.THEME_VARIANT)
 * @returns {Object} Theme state and controls specific to the theme type
 */
export const useTheme = (themeType) => {
  if (!themeType) {
    throw new Error('useTheme requires a theme type parameter. Use THEME_TYPES.COLOR, THEME_TYPES.CONTRAST, or THEME_TYPES.THEME_VARIANT');
  }

  const theme = themeRegistry.get(themeType);

  if (!theme) {
    throw new Error(`Theme manager not found for theme type: ${themeType}`);
  }

  const [mode, setMode] = useState(theme.getStoredValue());
  const [resolvedTheme, setResolvedTheme] = useState(theme.resolve());

  useEffect(() => {
    // Verify mode is valid for this theme
    const validModes = Object.values(theme.modes);
    if (!validModes.includes(mode)) {
      console.error(`Invalid mode "${mode}" for theme ${theme.storageKey}. Valid modes:`, validModes);
      return;
    }

    theme.setStoredValue(mode);
    theme.updateClass();
  }, [theme, mode]);

  useEffect(() => {
    // Only update class when system preference changes AND mode is SYSTEM
    if (mode === theme.modes.SYSTEM) {
      theme.updateClass();
    }
  }, [theme, mode, resolvedTheme]);

  useEffect(() => {
    const handlePreferenceChange = () => {
      setResolvedTheme(theme.resolve());
    };

    const mediaQuery = theme.getMediaQuery();

    if (!mediaQuery) {
      return;
    }
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
  }, []);

  return {
    mode,
    setMode,
    resolvedTheme,
    modes: theme.modes
  };
};
