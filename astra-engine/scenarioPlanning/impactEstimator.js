'use strict';

class ImpactEstimator {
  estimateImpact() {
    return { latencyReductionPercent: 75, memoryOverheadMB: 15 };
  }
}

module.exports = new ImpactEstimator();
