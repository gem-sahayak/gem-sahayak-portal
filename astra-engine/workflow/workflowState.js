'use strict';

class WorkflowState {
  constructor() {
    this.STATES = {
      IDLE: 'IDLE',
      PENDING: 'PENDING',
      RUNNING: 'RUNNING',
      COMPLETED: 'COMPLETED',
      FAILED: 'FAILED'
    };
    this.currentState = this.STATES.IDLE;
  }

  transitionTo(newState) {
    if (this.STATES[newState]) {
      this.currentState = newState;
      return true;
    }
    return false;
  }
}

module.exports = WorkflowState;
