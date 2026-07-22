'use strict';

class AgentMetrics {
  constructor() {
    this.totalAgents = 0;
    this.activeAgents = 0;
  }

  recordActive(count) {
    this.activeAgents = count;
  }

  getMetrics() {
    return { activeAgents: this.activeAgents };
  }
}

module.exports = new AgentMetrics();
