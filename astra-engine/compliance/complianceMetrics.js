'use strict';

class ComplianceMetrics {
  constructor() {
    this.totalChecks = 0;
  }

  recordCheck() {
    this.totalChecks++;
  }

  getMetrics() {
    return { totalChecks: this.totalChecks };
  }
}

module.exports = new ComplianceMetrics();
