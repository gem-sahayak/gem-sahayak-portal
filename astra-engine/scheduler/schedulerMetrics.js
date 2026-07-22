'use strict';

class SchedulerMetrics {
  constructor() {
    this.totalScheduled = 0;
    this.totalExecuted = 0;
  }

  recordSchedule() {
    this.totalScheduled++;
  }

  recordExecution() {
    this.totalExecuted++;
  }

  getMetrics() {
    return {
      totalScheduled: this.totalScheduled,
      totalExecuted: this.totalExecuted
    };
  }
}

module.exports = new SchedulerMetrics();
