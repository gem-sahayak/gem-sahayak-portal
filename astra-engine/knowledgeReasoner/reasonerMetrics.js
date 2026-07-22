'use strict';

class ReasonerMetrics {
  constructor() {
    this.totalInferences = 0;
  }

  recordInference() {
    this.totalInferences++;
  }

  getMetrics() {
    return { totalInferences: this.totalInferences };
  }
}

module.exports = new ReasonerMetrics();
