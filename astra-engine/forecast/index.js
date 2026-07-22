'use strict';

const runtimeForecast = require('./runtimeForecast');
const memoryForecast = require('./memoryForecast');
const storageForecast = require('./storageForecast');
const growthForecast = require('./growthForecast');
const scalingForecast = require('./scalingForecast');
const cacheForecast = require('./cacheForecast');
const forecastMetrics = require('./forecastMetrics');
const forecastEngine = require('./forecastEngine');

module.exports = {
  runtimeForecast,
  memoryForecast,
  storageForecast,
  growthForecast,
  scalingForecast,
  cacheForecast,
  forecastMetrics,
  forecastEngine
};
