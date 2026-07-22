'use strict';

class HeartbeatMonitor {
  constructor() {
    this.heartbeats = new Map();
  }

  ping(agentId) {
    this.heartbeats.set(agentId, Date.now());
  }

  getLastHeartbeat(agentId) {
    return this.heartbeats.get(agentId);
  }
}

module.exports = new HeartbeatMonitor();
