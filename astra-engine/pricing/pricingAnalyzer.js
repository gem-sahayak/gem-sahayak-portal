'use strict';

const priceVariance = require('./priceVariance');
const competitivePosition = require('./competitivePosition');
const pricingBenchmark = require('./pricingBenchmark');
const pricingMetrics = require('./pricingMetrics');

/**
 * PricingAnalyzer — Orchestrates all pricing intelligence sub-modules.
 * Accepts pricing data, runs variance, competitive position, and benchmark analyses.
 */
class PricingAnalyzer {
  analyze(pricingData = {}) {
    pricingMetrics.recordAnalysis();

    const { unitPrice = 0, benchmarkPrice = 0, marketAvg = 0, marketMin = 0, marketMax = 0, historicalPrices = [] } = pricingData;

    const variance = priceVariance.calculateVariance(unitPrice, benchmarkPrice || marketAvg);
    const position = competitivePosition.analyzePosition({ unitPrice, marketAvg, marketMin, marketMax });
    const benchmark = pricingBenchmark.benchmark(unitPrice, historicalPrices);

    return {
      variance,
      position,
      benchmark,
      metrics: pricingMetrics.getMetrics()
    };
  }
}

module.exports = new PricingAnalyzer();
