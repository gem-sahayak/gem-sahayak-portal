'use strict';

class WorkingMemory {
  constructor() {
    this.memory = new Map();
  }

  set(key, val) {
    this.memory.set(key, val);
  }

  get(key) {
    return this.memory.get(key);
  }
}

module.exports = new WorkingMemory();
