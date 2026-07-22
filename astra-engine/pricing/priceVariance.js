'use strict';

class PriceVariance {
  calculateVariance(currentPrice, benchmarkPrice) {
    const diff = currentPrice - benchmarkPrice;
    const variancePercent = Math.round((diff / benchmarkPrice) * 100);
    return { currentPrice, benchmarkPrice, variancePercent, status: variancePercent <= 0 ? 'COMPETITIVE' : 'ABOVE_BENCHMARK' };
  }
}

module.exports = new PriceVariance();
