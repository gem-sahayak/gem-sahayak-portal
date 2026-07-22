'use strict';

const strategyTemplates = require('./strategyTemplates');
const parallelStrategies = require('./parallelStrategies');
const fallbackStrategies = require('./fallbackStrategies');
const recoveryStrategies = require('./recoveryStrategies');
const strategyComparator = require('./strategyComparator');
const strategyMetrics = require('./strategyMetrics');
const strategyHistory = require('./strategyHistory');

class StrategyEngine {
  evaluateStrategies() {
    strategyMetrics.recordEvaluation();
    const primary = strategyTemplates.getTemplates();
    const parallel = parallelStrategies.getParallelStrategies();
    const fallback = fallbackStrategies.getFallbackStrategies();
    const recovery = recoveryStrategies.getRecoveryStrategies();

    const comparison = strategyComparator.compare([...primary, ...parallel, ...fallback, ...recovery]);
    strategyHistory.record(comparison.bestStrategy);

    return {
      primary,
      parallel,
      fallback,
      recovery,
      recommended: comparison.bestStrategy
    };
  }
}

module.exports = new StrategyEngine();
