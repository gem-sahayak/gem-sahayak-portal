'use strict';

class StorageForecast {
  forecastStorage() {
    return { projectedReportStorageMB: 12.5, annualGrowthMB: 50 };
  }
}

module.exports = new StorageForecast();
