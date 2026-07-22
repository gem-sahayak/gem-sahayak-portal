'use strict';

class VirtualExecutor {
  executeVirtually(step, sandbox) {
    sandbox.memoryState.set(`step_${step.id || step}`, 'EXECUTED_VIRTUAL');
    return {
      stepId: step.id || step,
      status: 'VIRTUAL_SUCCESS',
      simulatedLatencyMs: 5
    };
  }
}

module.exports = new VirtualExecutor();
