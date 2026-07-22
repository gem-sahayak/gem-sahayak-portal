'use strict';

class BidMetrics {
  constructor() {
    this.totalBidsAnalyzed = 0;
  }

  recordAnalysis() {
    this.totalBidsAnalyzed++;
  }

  getMetrics() {
    return { totalBidsAnalyzed: this.totalBidsAnalyzed };
  }
}

module.exports = new BidMetrics();
