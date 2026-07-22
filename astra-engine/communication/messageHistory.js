'use strict';

class MessageHistory {
  constructor() {
    this.history = [];
  }

  record(msg) {
    this.history.push({ timestamp: new Date().toISOString(), message: msg });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new MessageHistory();
