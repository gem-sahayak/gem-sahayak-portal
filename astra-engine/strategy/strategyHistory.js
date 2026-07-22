'use strict';

class StrategyHistory {
  constructor() {
    this.history = [];
  }

  record(strat) {
    this.history.unshift({
      timestamp: new Date().toISOString(),
      strategy: strat
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new StrategyHistory();
