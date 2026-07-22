'use strict';

const strategyEngine = require('./strategyEngine');
const strategyRegistry = require('./strategyRegistry');
const strategyTemplates = require('./strategyTemplates');
const parallelStrategies = require('./parallelStrategies');
const fallbackStrategies = require('./fallbackStrategies');
const recoveryStrategies = require('./recoveryStrategies');
const strategyMetrics = require('./strategyMetrics');
const strategyHistory = require('./strategyHistory');
const strategyComparator = require('./strategyComparator');

module.exports = {
  strategyEngine,
  strategyRegistry,
  strategyTemplates,
  parallelStrategies,
  fallbackStrategies,
  recoveryStrategies,
  strategyMetrics,
  strategyHistory,
  strategyComparator
};
