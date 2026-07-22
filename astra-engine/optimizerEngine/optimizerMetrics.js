'use strict';

class OptimizerMetrics {
  constructor() {
    this.totalOptimizations = 0;
  }

  recordOptimization() {
    this.totalOptimizations++;
  }

  getMetrics() {
    return { totalOptimizations: this.totalOptimizations };
  }
}

module.exports = new OptimizerMetrics();
