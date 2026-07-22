'use strict';

class ConfidenceModel {
  calculateScore(evidence = []) {
    return Math.min(0.99, Math.round((0.80 + (evidence.length * 0.05)) * 100) / 100);
  }
}

module.exports = new ConfidenceModel();
