'use strict';

const agentManager = require('./agentManager');
const agentRegistry = require('./agentRegistry');
const agentMetrics = require('./agentMetrics');

class AgentEngine {
  constructor() {
    this.manifest = {
      name: 'Enterprise Multi-Agent Intelligence Mesh Engine',
      version: '1.12.0',
      description: 'Agent lifecycle, registration, health monitoring, and memory management'
    };
  }

  async init() {
    if (agentRegistry.list().length === 0) {
      agentManager.createAgent('agent-seo', 'SEO Agent', 'AUDITOR');
      agentManager.createAgent('agent-graph', 'Graph Agent', 'REASONER');
      agentManager.createAgent('agent-review', 'Review Agent', 'QUALITY');
    }
  }

  async run() {
    await this.init();
    return {
      manifest: this.manifest,
      verdict: 'PASS',
      agents: agentRegistry.list().map(a => ({
        id: a.identity.id,
        name: a.identity.name,
        role: a.identity.role,
        state: a.lifecycle.getState()
      })),
      metrics: agentMetrics.getMetrics()
    };
  }
}

module.exports = new AgentEngine();
