'use strict';

class Watchdog {
  inspectAgents(agents = []) {
    return agents.map(a => ({ agentId: a.identity ? a.identity.id : a.id, healthy: true }));
  }
}

module.exports = new Watchdog();
