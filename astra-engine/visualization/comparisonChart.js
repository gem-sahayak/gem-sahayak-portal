'use strict';

class ComparisonChartVisualizer {
  renderChart() {
    return { type: 'COMPARISON_CHART', comparedStrategies: 3 };
  }
}

module.exports = new ComparisonChartVisualizer();
