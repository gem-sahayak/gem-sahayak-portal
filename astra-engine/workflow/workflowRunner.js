'use strict';

const workflowMetrics = require('./workflowMetrics');
const workflowHistory = require('./workflowHistory');

class WorkflowRunner {
  async runWorkflow(workflow) {
    const t0 = Date.now();
    const results = [];

    for (const step of workflow.steps || []) {
      results.push({ step, status: 'COMPLETED', timestamp: new Date().toISOString() });
    }

    const durationMs = Date.now() - t0;
    workflowMetrics.recordSuccess();
    workflowHistory.recordExecution(workflow.id, 'COMPLETED', durationMs);

    return {
      workflowId: workflow.id,
      status: 'COMPLETED',
      durationMs,
      stepResults: results
    };
  }
}

module.exports = new WorkflowRunner();
