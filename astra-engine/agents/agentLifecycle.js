'use strict';

class AgentLifecycle {
  constructor() {
    this.state = 'INITIALIZED';
  }

  transition(newState) {
    this.state = newState;
    return this.state;
  }

  getState() {
    return this.state;
  }
}

module.exports = AgentLifecycle;
