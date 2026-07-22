'use strict';

class ForecastMetrics {
  constructor() {
    this.totalForecasts = 0;
  }

  recordForecast() {
    this.totalForecasts++;
  }

  getMetrics() {
    return { totalForecasts: this.totalForecasts };
  }
}

module.exports = new ForecastMetrics();
