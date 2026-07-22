'use strict';

class ScenarioMetrics {
  constructor() {
    this.totalScenariosRun = 0;
  }

  recordRun() {
    this.totalScenariosRun++;
  }

  getMetrics() {
    return { totalScenariosRun: this.totalScenariosRun };
  }
}

module.exports = new ScenarioMetrics();
