'use strict';

const fs = require('fs');
const crypto = require('crypto');

class BuildChecksumVerifier {
  calculateFileHash(filePath) {
    try {
      if (!fs.existsSync(filePath)) return null;
      const buffer = fs.readFileSync(filePath);
      return crypto.createHash('sha256').update(buffer).digest('hex');
    } catch (e) {
      return null;
    }
  }
}

module.exports = new BuildChecksumVerifier();
