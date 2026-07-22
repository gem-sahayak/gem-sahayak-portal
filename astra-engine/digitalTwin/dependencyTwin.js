'use strict';

class DependencyTwin {
  createTwin() {
    return {
      type: 'DEPENDENCY_TWIN',
      internalModulesCount: 25,
      circularDependencies: 0
    };
  }
}

module.exports = new DependencyTwin();
