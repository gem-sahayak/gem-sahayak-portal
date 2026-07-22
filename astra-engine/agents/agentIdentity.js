'use strict';

class AgentIdentity {
  constructor(id, name, role) {
    this.id = id || `agent-${Math.random().toString(36).substring(2, 8)}`;
    this.name = name || 'ASTRA Autonomous Agent';
    this.role = role || 'REASONING_AGENT';
  }
}

module.exports = AgentIdentity;
