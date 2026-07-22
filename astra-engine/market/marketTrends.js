'use strict';

/**
 * MarketTrends — Analyzes market trends from time-series data points.
 * Computes trend direction via linear regression slope, growth rate, and volatility.
 */
class MarketTrends {
  analyzeTrends(dataPoints = []) {
    const n = dataPoints.length;
    if (n === 0) return { trend: 'STABLE', averageGrowthRate: 0, volatility: 0, dataPointCount: 0 };

    const values = dataPoints.map(d => d.value || 0);
    const mean = values.reduce((s, v) => s + v, 0) / n;

    // Linear regression slope
    let trend = 'STABLE';
    let slope = 0;
    if (n >= 2) {
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      for (let i = 0; i < n; i++) {
        sumX += i; sumY += values[i]; sumXY += i * values[i]; sumX2 += i * i;
      }
      slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const slopePercent = mean !== 0 ? (slope / mean) * 100 : 0;
      if (slopePercent > 1) trend = 'RISING';
      else if (slopePercent < -1) trend = 'DECLINING';
    }

    // Growth rate
    const averageGrowthRate = n >= 2 && values[0] !== 0
      ? Math.round(((values[n - 1] - values[0]) / values[0]) * 10000) / 100
      : 0;

    // Volatility (coefficient of variation)
    const variance = values.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);
    const volatility = mean !== 0 ? Math.round((stdDev / mean) * 10000) / 100 : 0;

    return { trend, averageGrowthRate, volatility, dataPointCount: n };
  }
}

module.exports = new MarketTrends();
