'use strict';

/**
 * Studio Settings Manager.
 */
class SettingsManager {
  constructor() {
    this.settings = {
      theme: 'dark',
      layout: 'default-grid',
      autoSave: true,
      performanceMode: 'high-speed',
      engineDefaults: {
        autoRunDoctor: true,
        reportFormat: 'json'
      }
    };
  }

  getSettings() {
    return this.settings;
  }

  updateSettings(newSettings = {}) {
    this.settings = { ...this.settings, ...newSettings };
    return this.settings;
  }
}

module.exports = new SettingsManager();
