'use strict';

class DependencyPlanner {
  planDependencies() {
    return { order: ['core', 'engines', 'studio', 'dashboard', 'graphExplorer'] };
  }
}

module.exports = new DependencyPlanner();
