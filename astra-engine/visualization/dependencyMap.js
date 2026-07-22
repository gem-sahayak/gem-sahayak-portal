'use strict';

class DependencyMapVisualizer {
  renderMap() {
    return { type: 'DEPENDENCY_MAP', status: 'HEALTHY' };
  }
}

module.exports = new DependencyMapVisualizer();
