'use strict';

class RiskMetrics {
  constructor() {
    this.assessmentsCount = 0;
  }

  recordAssessment() {
    this.assessmentsCount++;
  }

  getMetrics() {
    return { assessmentsCount: this.assessmentsCount };
  }
}

module.exports = new RiskMetrics();
