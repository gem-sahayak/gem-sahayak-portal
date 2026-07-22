'use strict';

class ExplainabilityMetrics {
  constructor() {
    this.totalExplanations = 0;
  }

  recordExplanation() {
    this.totalExplanations++;
  }

  getMetrics() {
    return { totalExplanations: this.totalExplanations };
  }
}

module.exports = new ExplainabilityMetrics();
