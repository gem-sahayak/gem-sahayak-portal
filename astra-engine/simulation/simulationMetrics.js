'use strict';

class SimulationMetrics {
  constructor() {
    this.totalSimulations = 0;
    this.totalStepsSimulated = 0;
  }

  recordRun(stepCount = 1) {
    this.totalSimulations++;
    this.totalStepsSimulated += stepCount;
  }

  getMetrics() {
    return {
      totalSimulations: this.totalSimulations,
      totalStepsSimulated: this.totalStepsSimulated
    };
  }
}

module.exports = new SimulationMetrics();
