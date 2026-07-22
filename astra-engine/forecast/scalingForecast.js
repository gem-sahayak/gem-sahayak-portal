'use strict';

class ScalingForecast {
  forecastScaling() {
    return { maxSupportedArticles: 100000, scaleLimitStatus: 'HEALTHY' };
  }
}

module.exports = new ScalingForecast();
