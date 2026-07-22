'use strict';

class ProcurementMetrics {
  constructor() {
    this.totalProcurementSessions = 0;
  }

  recordSession() {
    this.totalProcurementSessions++;
  }

  getMetrics() {
    return { totalProcurementSessions: this.totalProcurementSessions };
  }
}

module.exports = new ProcurementMetrics();
