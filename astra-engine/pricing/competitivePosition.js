'use strict';

/**
 * CompetitivePosition — Analyzes a supplier's pricing position against market data.
 * Computes percentile, deviation, and strategic recommendation.
 */
class CompetitivePosition {
  analyzePosition(priceData = {}) {
    const { unitPrice = 0, marketAvg = 0, marketMin = 0, marketMax = 0 } = priceData;

    if (marketMax === marketMin) {
      return { position: 'AVERAGE', percentile: 50, deviation: 0, recommendation: 'HOLD' };
    }

    const range = marketMax - marketMin;
    const percentile = Math.round(((unitPrice - marketMin) / range) * 100);
    const deviation = marketAvg !== 0 ? Math.round(((unitPrice - marketAvg) / marketAvg) * 10000) / 100 : 0;

    let position;
    if (deviation < -5) position = 'BELOW_AVERAGE';
    else if (deviation > 5) position = 'ABOVE_AVERAGE';
    else position = 'AVERAGE';

    let recommendation;
    if (position === 'BELOW_AVERAGE') recommendation = 'COMPETITIVE_ADVANTAGE';
    else if (position === 'ABOVE_AVERAGE') recommendation = 'CONSIDER_PRICE_REDUCTION';
    else recommendation = 'HOLD';

    return { position, percentile, deviation, recommendation };
  }
}

module.exports = new CompetitivePosition();
