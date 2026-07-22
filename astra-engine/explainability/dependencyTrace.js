'use strict';

class DependencyTrace {
  traceDependencies() {
    return { dependencyChain: ['CoreGuards', 'Scanner', 'Registry', 'Engines'] };
  }
}

module.exports = new DependencyTrace();
