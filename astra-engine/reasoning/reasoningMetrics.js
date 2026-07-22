'use strict';

class ReasoningMetrics {
  constructor() {
    this.sessionsCount = 0;
  }

  recordSession() {
    this.sessionsCount++;
  }

  getMetrics() {
    return { sessionsCount: this.sessionsCount };
  }
}

module.exports = new ReasoningMetrics();
