'use strict';

class HealthMonitor {
  checkHealth() {
    return { overallHealth: 'HEALTHY', activeSubsystems: 6 };
  }
}

module.exports = new HealthMonitor();
