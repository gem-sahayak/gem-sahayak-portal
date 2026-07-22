'use strict';

class ReasoningHistory {
  constructor() {
    this.history = [];
  }

  record(session) {
    this.history.unshift({
      sessionId: `rsn-${Math.random().toString(36).substring(2, 8)}`,
      timestamp: new Date().toISOString(),
      session
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new ReasoningHistory();
