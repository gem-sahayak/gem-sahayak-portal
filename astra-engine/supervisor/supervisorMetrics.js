'use strict';

class SupervisorMetrics {
  constructor() {
    this.totalHealthChecks = 0;
  }

  recordCheck() {
    this.totalHealthChecks++;
  }

  getMetrics() {
    return { totalHealthChecks: this.totalHealthChecks };
  }
}

module.exports = new SupervisorMetrics();
