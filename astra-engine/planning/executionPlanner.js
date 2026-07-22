'use strict';

class ExecutionPlanner {
  buildExecutionPlan() {
    return { executionOrder: ['scanner', 'registry', 'seo', 'graph', 'review', 'semantic', 'optimizer', 'knowledge', 'dashboard', 'explorer'] };
  }
}

module.exports = new ExecutionPlanner();
