'use strict';

class CommunicationMetrics {
  constructor() {
    this.totalMessages = 0;
  }

  recordMessage() {
    this.totalMessages++;
  }

  getMetrics() {
    return { totalMessages: this.totalMessages };
  }
}

module.exports = new CommunicationMetrics();
