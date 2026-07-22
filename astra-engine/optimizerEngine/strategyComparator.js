'use strict';

class StrategyComparator {
  compare(strategies = []) {
    const sorted = [...strategies].sort((a, b) => a.estimatedRuntimeMs - b.estimatedRuntimeMs);
    return {
      bestStrategy: sorted[0],
      comparison: sorted
    };
  }
}

module.exports = new StrategyComparator();
