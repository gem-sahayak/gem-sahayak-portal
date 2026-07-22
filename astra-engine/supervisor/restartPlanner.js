'use strict';

class RestartPlanner {
  planRestart(agentId) {
    return { plan: 'RESTART_CLEAN', delayMs: 10 };
  }
}

module.exports = new RestartPlanner();
