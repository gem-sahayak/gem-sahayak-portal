'use strict';

class ScenarioHistory {
  constructor() {
    this.history = [];
  }

  record(scen) {
    this.history.unshift({
      timestamp: new Date().toISOString(),
      scenario: scen
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new ScenarioHistory();
