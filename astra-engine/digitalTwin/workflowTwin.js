'use strict';

class WorkflowTwin {
  createTwin() {
    return {
      type: 'WORKFLOW_TWIN',
      activePipelines: 2,
      scheduledJobs: 1,
      status: 'SYNCHRONIZED'
    };
  }
}

module.exports = new WorkflowTwin();
