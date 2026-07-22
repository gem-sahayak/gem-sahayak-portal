'use strict';

class RuleMetrics {
  constructor() {
    this.totalEvaluated = 0;
    this.totalTriggered = 0;
  }

  recordEvaluation(triggered = false) {
    this.totalEvaluated++;
    if (triggered) this.totalTriggered++;
  }

  getMetrics() {
    return {
      totalEvaluated: this.totalEvaluated,
      totalTriggered: this.totalTriggered
    };
  }
}

module.exports = new RuleMetrics();
