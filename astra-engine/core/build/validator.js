'use strict';

const integrityChecker = require('./integrity');
const checksumVerifier = require('./checksum');

class BuildValidator {
  validateBuild() {
    const t0 = Date.now();
    const integrityRes = integrityChecker.checkCoreIntegrity();
    const durationMs = Date.now() - t0;

    return {
      passed: integrityRes.valid,
      durationMs,
      integrity: integrityRes
    };
  }
}

module.exports = new BuildValidator();
