'use strict';

class MemoryForecast {
  forecastMemory() {
    return { projectedHeapMB: 65, peakUsageMB: 120 };
  }
}

module.exports = new MemoryForecast();
