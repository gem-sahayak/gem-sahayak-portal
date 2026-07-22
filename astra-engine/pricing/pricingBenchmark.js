'use strict';

/**
 * PricingBenchmark — Benchmarks current pricing against historical price data.
 * Computes mean, median, standard deviation, z-score, and trend direction.
 */
class PricingBenchmark {
  benchmark(currentPrice = 0, historicalPrices = []) {
    if (historicalPrices.length === 0) {
      return { mean: currentPrice, median: currentPrice, stdDev: 0, zScore: 0, trend: 'STABLE', sampleSize: 0 };
    }

    const sorted = [...historicalPrices].sort((a, b) => a - b);
    const n = sorted.length;
    const mean = sorted.reduce((s, v) => s + v, 0) / n;

    const median = n % 2 === 0
      ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
      : sorted[Math.floor(n / 2)];

    const variance = sorted.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / n;
    const stdDev = Math.round(Math.sqrt(variance) * 100) / 100;

    const zScore = stdDev > 0 ? Math.round(((currentPrice - mean) / stdDev) * 100) / 100 : 0;

    // Trend: compute linear slope across ordered data points
    let trend = 'STABLE';
    if (n >= 2) {
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      for (let i = 0; i < n; i++) {
        sumX += i;
        sumY += sorted.length > 0 ? historicalPrices[i] : 0;
        sumXY += i * historicalPrices[i];
        sumX2 += i * i;
      }
      const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const slopePercent = mean !== 0 ? (slope / mean) * 100 : 0;
      if (slopePercent > 1) trend = 'RISING';
      else if (slopePercent < -1) trend = 'DECLINING';
      else trend = 'STABLE';
    }

    return {
      mean: Math.round(mean * 100) / 100,
      median: Math.round(median * 100) / 100,
      stdDev,
      zScore,
      trend,
      sampleSize: n
    };
  }
}

module.exports = new PricingBenchmark();
