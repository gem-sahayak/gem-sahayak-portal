'use strict';

class LatencyOptimizer {
  optimizeLatency() {
    return { targetLatencyMs: 15, bottleneck: 'NONE' };
  }
}

module.exports = new LatencyOptimizer();
