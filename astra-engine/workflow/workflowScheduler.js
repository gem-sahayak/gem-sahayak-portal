'use strict';

class WorkflowScheduler {
  schedule(workflowId, cronExpr = '0 0 * * *') {
    return {
      scheduleId: `sched-${Math.random().toString(36).substring(2, 8)}`,
      workflowId,
      cronExpr,
      nextRun: new Date(Date.now() + 86400000).toISOString()
    };
  }
}

module.exports = new WorkflowScheduler();
