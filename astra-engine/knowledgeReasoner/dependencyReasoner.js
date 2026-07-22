'use strict';

class DependencyReasoner {
  reasonOverDependencies() {
    return { acyclic: true, criticalPath: ['scanner', 'registry', 'seo', 'graph'] };
  }
}

module.exports = new DependencyReasoner();
