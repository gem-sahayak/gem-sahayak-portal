'use strict';

class ExecutionHistory {
  constructor() {
    this.history = [];
  }

  record(simulationRun) {
    this.history.unshift({
      runId: `sim-run-${Math.random().toString(36).substring(2, 8)}`,
      timestamp: new Date().toISOString(),
      summary: simulationRun
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new ExecutionHistory();
