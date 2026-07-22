'use strict';

class MemoryMetrics {
  constructor() {
    this.totalMemoriesStored = 0;
  }

  recordStorage() {
    this.totalMemoriesStored++;
  }

  getMetrics() {
    return { totalMemoriesStored: this.totalMemoriesStored };
  }
}

module.exports = new MemoryMetrics();
