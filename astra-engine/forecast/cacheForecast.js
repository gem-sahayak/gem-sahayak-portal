'use strict';

class CacheForecast {
  forecastCache() {
    return { cacheSizeMB: 5.2, expectedEvictionRatePercent: 0 };
  }
}

module.exports = new CacheForecast();
