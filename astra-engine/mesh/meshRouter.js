'use strict';

class MeshRouter {
  routeTask(task, targetAgentId) {
    return { routed: true, targetAgentId, task };
  }
}

module.exports = new MeshRouter();
