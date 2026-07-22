'use strict';

class PriorityEngine {
  calculatePriority(impact = 'HIGH', difficulty = 'EASY') {
    if (impact === 'CRITICAL' || (impact === 'HIGH' && difficulty === 'EASY')) return 'CRITICAL';
    if (impact === 'HIGH') return 'HIGH';
    if (impact === 'MEDIUM') return 'MEDIUM';
    return 'LOW';
  }
}

module.exports = new PriorityEngine();
