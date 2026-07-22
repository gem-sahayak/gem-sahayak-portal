'use strict';

class WorkflowRegistry {
  constructor() {
    this.workflows = new Map();
  }

  register(workflow) {
    this.workflows.set(workflow.id, workflow);
  }

  get(id) {
    return this.workflows.get(id);
  }

  list() {
    return Array.from(this.workflows.values());
  }
}

module.exports = new WorkflowRegistry();
