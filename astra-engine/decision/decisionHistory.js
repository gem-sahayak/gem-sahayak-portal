'use strict';

class DecisionHistory {
  constructor() {
    this.history = [];
  }

  record(decision) {
    this.history.unshift({
      id: `dec-${Math.random().toString(36).substring(2, 8)}`,
      decision,
      timestamp: new Date().toISOString()
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new DecisionHistory();
