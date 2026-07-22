'use strict';

const AgentIdentity = require('./agentIdentity');
const AgentLifecycle = require('./agentLifecycle');
const AgentContext = require('./agentContext');
const AgentMemory = require('./agentMemory');
const agentRegistry = require('./agentRegistry');
const agentMetrics = require('./agentMetrics');

class AgentManager {
  createAgent(id, name, role) {
    const identity = new AgentIdentity(id, name, role);
    const lifecycle = new AgentLifecycle();
    const context = new AgentContext();
    const memory = new AgentMemory();

    const agent = {
      identity,
      lifecycle,
      context,
      memory,
      start: () => lifecycle.transition('ACTIVE'),
      stop: () => lifecycle.transition('STOPPED'),
      suspend: () => lifecycle.transition('SUSPENDED'),
      resume: () => lifecycle.transition('ACTIVE')
    };

    agentRegistry.register(agent);
    agentMetrics.recordActive(agentRegistry.list().length);

    return agent;
  }
}

module.exports = new AgentManager();
