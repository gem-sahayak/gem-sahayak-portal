'use strict';

class StrategyComparator {
  compare(strats = []) {
    return {
      bestStrategy: strats[0] || { id: 'st-primary', name: 'Primary Full-Scan Audit' },
      allStrategies: strats
    };
  }
}

module.exports = new StrategyComparator();
