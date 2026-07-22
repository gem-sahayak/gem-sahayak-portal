'use strict';

class ScoringEngine {
  calculateScore(item) {
    const impactWeight = item.impact === 'HIGH' ? 40 : 20;
    const confidenceWeight = (item.confidence || 0.8) * 40;
    return Math.round(impactWeight + confidenceWeight);
  }
}

module.exports = new ScoringEngine();
