'use strict';

class WorkflowMetrics {
  constructor() {
    this.totalExecuted = 0;
    this.totalSuccess = 0;
    this.totalFailed = 0;
  }

  recordSuccess() {
    this.totalExecuted++;
    this.totalSuccess++;
  }

  recordFailure() {
    this.totalExecuted++;
    this.totalFailed++;
  }

  getMetrics() {
    return {
      totalExecuted: this.totalExecuted,
      totalSuccess: this.totalSuccess,
      totalFailed: this.totalFailed,
      successRate: this.totalExecuted === 0 ? 1.0 : this.totalSuccess / this.totalExecuted
    };
  }
}

module.exports = new WorkflowMetrics();
