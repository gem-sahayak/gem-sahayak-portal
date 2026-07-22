'use strict';

class AgentMemory {
  constructor() {
    this.memory = [];
  }

  remember(item) {
    this.memory.push({ timestamp: new Date().toISOString(), item });
  }

  getMemory() {
    return this.memory;
  }
}

module.exports = AgentMemory;
