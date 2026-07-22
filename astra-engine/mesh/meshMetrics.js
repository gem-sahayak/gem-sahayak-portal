'use strict';

class MeshMetrics {
  constructor() {
    this.totalMessagesRouted = 0;
  }

  recordRouting() {
    this.totalMessagesRouted++;
  }

  getMetrics() {
    return { totalMessagesRouted: this.totalMessagesRouted };
  }
}

module.exports = new MeshMetrics();
