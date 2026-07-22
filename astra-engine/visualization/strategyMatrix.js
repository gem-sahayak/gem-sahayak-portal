'use strict';

class StrategyMatrixVisualizer {
  renderMatrix() {
    return { type: 'STRATEGY_MATRIX', strategiesCount: 3 };
  }
}

module.exports = new StrategyMatrixVisualizer();
