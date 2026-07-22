'use strict';

const strategyGenerator = require('./strategyGenerator');
const strategyComparator = require('./strategyComparator');
const parallelOptimizer = require('./parallelOptimizer');
const resourceOptimizer = require('./resourceOptimizer');
const latencyOptimizer = require('./latencyOptimizer');
const dependencyOptimizer = require('./dependencyOptimizer');
const cacheOptimizer = require('./cacheOptimizer');
const optimizerMetrics = require('./optimizerMetrics');

class ExecutionOptimizer {
  runOptimizer() {
    optimizerMetrics.recordOptimization();
    const strategies = strategyGenerator.generateStrategies();
    const comparison = strategyComparator.compare(strategies);
    const parallel = parallelOptimizer.optimizeParallelism();
    const resource = resourceOptimizer.optimizeResources();
    const latency = latencyOptimizer.optimizeLatency();
    const dependency = dependencyOptimizer.optimizeDependencies();
    const cache = cacheOptimizer.optimizeCache();

    return {
      strategies,
      recommendedStrategy: comparison.bestStrategy,
      parallelSettings: parallel,
      resourceSettings: resource,
      latencySettings: latency,
      dependencySettings: dependency,
      cacheSettings: cache
    };
  }
}

module.exports = new ExecutionOptimizer();
