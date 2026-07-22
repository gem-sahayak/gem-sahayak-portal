'use strict';

class WorkflowContext {
  constructor(initialData = {}) {
    this.data = new Map(Object.entries(initialData));
    this.createdAt = new Date().toISOString();
  }

  set(key, val) {
    this.data.set(key, val);
  }

  get(key) {
    return this.data.get(key);
  }

  toJSON() {
    return Object.fromEntries(this.data);
  }
}

module.exports = WorkflowContext;
