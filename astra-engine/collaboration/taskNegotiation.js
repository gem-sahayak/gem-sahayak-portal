'use strict';

class TaskNegotiation {
  negotiate(task, agents = []) {
    return { assignedAgent: agents[0] || 'agent-seo', task, agreed: true };
  }
}

module.exports = new TaskNegotiation();
