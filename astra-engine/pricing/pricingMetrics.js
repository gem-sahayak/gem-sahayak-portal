'use strict';

/**
 * PricingMetrics — Tracks pricing analysis session metrics.
 */
class PricingMetrics {
  constructor() {
    this.totalAnalyses = 0;
    this.totalBenchmarks = 0;
    this.totalPositionChecks = 0;
  }

  recordAnalysis() { this.totalAnalyses++; }
  recordBenchmark() { this.totalBenchmarks++; }
  recordPositionCheck() { this.totalPositionChecks++; }

  getMetrics() {
    return {
      totalAnalyses: this.totalAnalyses,
      totalBenchmarks: this.totalBenchmarks,
      totalPositionChecks: this.totalPositionChecks
    };
  }
}

module.exports = new PricingMetrics();
