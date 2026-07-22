'use strict';

class ComplianceHistory {
  constructor() {
    this.history = [];
  }

  record(item) {
    this.history.push({ timestamp: new Date().toISOString(), item });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new ComplianceHistory();
