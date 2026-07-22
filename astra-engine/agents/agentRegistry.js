'use strict';

class AgentRegistry {
  constructor() {
    this.agents = new Map();
  }

  register(agent) {
    this.agents.set(agent.identity.id, agent);
  }

  unregister(id) {
    this.agents.delete(id);
  }

  list() {
    return Array.from(this.agents.values());
  }
}

module.exports = new AgentRegistry();
