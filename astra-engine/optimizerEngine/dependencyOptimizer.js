'use strict';

class DependencyOptimizer {
  optimizeDependencies() {
    return { order: ['scanner', 'parser', 'registry', 'engines'], cycleRisk: 0 };
  }
}

module.exports = new DependencyOptimizer();
