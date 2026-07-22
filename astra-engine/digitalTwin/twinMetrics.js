'use strict';

class TwinMetrics {
  constructor() {
    this.syncCount = 0;
  }

  recordSync() {
    this.syncCount++;
  }

  getMetrics() {
    return { syncCount: this.syncCount };
  }
}

module.exports = new TwinMetrics();
