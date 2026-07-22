'use strict';

class WorkflowHistory {
  constructor() {
    this.history = [];
  }

  recordExecution(workflowId, status, durationMs) {
    this.history.unshift({
      executionId: `exec-${Math.random().toString(36).substring(2, 8)}`,
      workflowId,
      status,
      durationMs,
      timestamp: new Date().toISOString()
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new WorkflowHistory();
