'use strict';

const fs = require('fs');
const path = require('path');
const checksumVerifier = require('./checksum');

class BuildIntegrityChecker {
  checkCoreIntegrity() {
    const requiredFiles = [
      'astra.config.json',
      'cli.js',
      'core/config/index.js',
      'core/state/index.js',
      'core/guards/importGuard.js',
      'core/guards/pathGuard.js'
    ];

    const missing = [];
    const root = path.resolve(__dirname, '../..');

    for (const f of requiredFiles) {
      if (!fs.existsSync(path.join(root, f))) {
        missing.push(f);
      }
    }

    return {
      valid: missing.length === 0,
      missing
    };
  }
}

module.exports = new BuildIntegrityChecker();
