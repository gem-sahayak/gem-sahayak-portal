'use strict';

const runtimeForecast = require('./runtimeForecast');
const memoryForecast = require('./memoryForecast');
const storageForecast = require('./storageForecast');
const growthForecast = require('./growthForecast');
const scalingForecast = require('./scalingForecast');
const cacheForecast = require('./cacheForecast');
const forecastMetrics = require('./forecastMetrics');

class ForecastEngine {
  runForecast() {
    forecastMetrics.recordForecast();
    return {
      runtime: runtimeForecast.forecastRuntime(),
      memory: memoryForecast.forecastMemory(),
      storage: storageForecast.forecastStorage(),
      growth: growthForecast.forecastGrowth(),
      scaling: scalingForecast.forecastScaling(),
      cache: cacheForecast.forecastCache()
    };
  }
}

module.exports = new ForecastEngine();
