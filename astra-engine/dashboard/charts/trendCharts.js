'use strict';

/**
 * Trend Charts Component.
 */
class TrendCharts {
  renderTrends(history = []) {
    return {
      chartType: 'LINE',
      series: [
        { name: 'Optimization Score', data: [65, 70, 75, 78] },
        { name: 'Cache Hit Ratio', data: [80, 85, 92, 100] }
      ]
    };
  }
}

module.exports = new TrendCharts();
