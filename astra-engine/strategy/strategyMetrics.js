'use strict';

class StrategyMetrics {
  constructor() {
    this.strategiesEvaluated = 0;
  }

  recordEvaluation() {
    this.strategiesEvaluated++;
  }

  getMetrics() {
    return { strategiesEvaluated: this.strategiesEvaluated };
  }
}

module.exports = new StrategyMetrics();
