'use strict';

/**
 * Studio Theme Manager.
 * Supports Light, Dark, System, and Custom visual themes.
 */
class ThemeManager {
  constructor() {
    this.currentTheme = 'dark';
    this.availableThemes = ['dark', 'light', 'system', 'cyber-blue', 'monokai'];
  }

  setTheme(themeName) {
    if (this.availableThemes.includes(themeName)) {
      this.currentTheme = themeName;
      return true;
    }
    return false;
  }

  getTheme() {
    return this.currentTheme;
  }

  getThemeTokens() {
    if (this.currentTheme === 'light') {
      return { background: '#FFFFFF', foreground: '#1E1E1E', primary: '#0066CC', border: '#E0E0E0' };
    }
    return { background: '#1E1E2E', foreground: '#D9E0EE', primary: '#89B4FA', border: '#313244' };
  }
}

module.exports = new ThemeManager();
