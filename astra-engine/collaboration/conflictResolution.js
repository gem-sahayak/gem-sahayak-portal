'use strict';

class ConflictResolution {
  resolveConflict(agentA, agentB, issue) {
    return { resolved: true, winningAgent: agentA, strategy: 'HIGHEST_CONFIDENCE_PRIORITY' };
  }
}

module.exports = new ConflictResolution();
