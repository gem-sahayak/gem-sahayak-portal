'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const manifestValidator = require('../manifest');

class PluginPackageValidator {
  validatePackageFolder(folderPath) {
    const manifestPath = path.join(folderPath, 'plugin.json');
    const indexPath = path.join(folderPath, 'index.js');
    const readmePath = path.join(folderPath, 'README.md');

    const errors = [];
    if (!fs.existsSync(manifestPath)) errors.push('Missing plugin.json manifest');
    if (!fs.existsSync(indexPath)) errors.push('Missing index.js entry point');
    if (!fs.existsSync(readmePath)) errors.push('Missing README.md documentation');

    if (errors.length > 0) {
      return { valid: false, errors };
    }

    const valRes = manifestValidator.loadAndValidate(manifestPath);
    return valRes;
  }

  calculateChecksum(filePath) {
    try {
      if (!fs.existsSync(filePath)) return null;
      const buffer = fs.readFileSync(filePath);
      return crypto.createHash('sha256').update(buffer).digest('hex');
    } catch (e) {
      return null;
    }
  }
}

module.exports = new PluginPackageValidator();
