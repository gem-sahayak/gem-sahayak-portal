'use strict';

class StrategyRegistry {
  constructor() {
    this.strategies = new Map();
  }

  register(strat) {
    this.strategies.set(strat.id, strat);
  }

  list() {
    return Array.from(this.strategies.values());
  }
}

module.exports = new StrategyRegistry();
