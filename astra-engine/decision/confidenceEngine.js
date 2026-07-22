'use strict';

class ConfidenceEngine {
  calculateConfidence(evidenceCount = 1) {
    return Math.min(0.99, Math.round((0.70 + (evidenceCount * 0.05)) * 100) / 100);
  }
}

module.exports = new ConfidenceEngine();
