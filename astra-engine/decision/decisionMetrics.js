'use strict';

class DecisionMetrics {
  constructor() {
    this.totalDecisions = 0;
  }

  recordDecision() {
    this.totalDecisions++;
  }

  getMetrics() {
    return {
      totalDecisions: this.totalDecisions
    };
  }
}

module.exports = new DecisionMetrics();
