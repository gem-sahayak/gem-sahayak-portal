'use strict';

class RiskScore {
  calculateScore(riskItems = []) {
    let score = 0;
    for (const item of riskItems) {
      if (item.level === 'CRITICAL') score += 40;
      else if (item.level === 'HIGH') score += 20;
      else if (item.level === 'MEDIUM') score += 10;
      else score += 5;
    }
    return Math.min(100, score);
  }
}

module.exports = new RiskScore();
