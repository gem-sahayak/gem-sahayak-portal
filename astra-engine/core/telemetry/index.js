'use strict';

const TelemetryCollector = require('./metrics');

const defaultCollector = new TelemetryCollector();

module.exports = {
  telemetry: defaultCollector,
  TelemetryCollector
};
