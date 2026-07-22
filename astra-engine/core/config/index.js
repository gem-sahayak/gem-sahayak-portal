'use strict';

const fs = require('fs');
const path = require('path');

class ConfigLoader {
  constructor() {
    this.configPath = path.resolve(__dirname, '../../astra.config.json');
    this.currentConfig = null;
  }

  load() {
    if (this.currentConfig) {
      return this.currentConfig;
    }

    try {
      if (!fs.existsSync(this.configPath)) {
        throw new Error(`Astra configuration file not found at: ${this.configPath}`);
      }

      const fileContent = fs.readFileSync(this.configPath, 'utf8');
      const parsed = JSON.parse(fileContent);
      
      // Strict configuration rules validation
      const requiredFields = ['engineVersion', 'schemaVersion', 'exclusions', 'options'];
      for (const field of requiredFields) {
        if (!parsed[field]) {
          throw new Error(`Invalid configuration: Missing required field "${field}"`);
        }
      }

      this.currentConfig = parsed;
      return this.currentConfig;
    } catch (error) {
      console.error(`[Astra Config Error] Failed to load configuration: ${error.message}`);
      throw error;
    }
  }

  getExclusions() {
    const config = this.load();
    return config.exclusions || [];
  }

  getOptions() {
    const config = this.load();
    return config.options || {};
  }
}

module.exports = new ConfigLoader();
