'use strict';

class ForecastChartsVisualizer {
  renderCharts() {
    return { type: 'FORECAST_CHARTS', metrics: ['runtime', 'memory', 'storage'] };
  }
}

module.exports = new ForecastChartsVisualizer();
