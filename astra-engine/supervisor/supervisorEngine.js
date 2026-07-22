'use strict';

const healthMonitor = require('./healthMonitor');
const heartbeat = require('./heartbeat');
const watchdog = require('./watchdog');
const supervisorMetrics = require('./supervisorMetrics');

class SupervisorEngine {
  runSupervision(agents = []) {
    supervisorMetrics.recordCheck();
    agents.forEach(a => heartbeat.ping(a.id || (a.identity && a.identity.id)));
    const health = healthMonitor.checkHealth();
    const status = watchdog.inspectAgents(agents);

    return {
      health,
      agentStatus: status,
      metrics: supervisorMetrics.getMetrics()
    };
  }
}

module.exports = new SupervisorEngine();
