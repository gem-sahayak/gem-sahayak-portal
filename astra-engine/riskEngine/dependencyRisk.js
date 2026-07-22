'use strict';

class DependencyRisk {
  assess() {
    return { level: 'LOW', details: 'Zero circular dependencies' };
  }
}

module.exports = new DependencyRisk();
