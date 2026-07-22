'use strict';

class CollaborationMetrics {
  constructor() {
    this.totalConsensusReached = 0;
  }

  recordConsensus() {
    this.totalConsensusReached++;
  }

  getMetrics() {
    return { totalConsensusReached: this.totalConsensusReached };
  }
}

module.exports = new CollaborationMetrics();
