'use strict';

class ScenarioGenerator {
  generateScenarios() {
    return [
      { id: 'scen-baseline', name: 'Baseline Full Repo Audit', stepsCount: 10 },
      { id: 'scen-parallel', name: 'Parallel Engine Execution', stepsCount: 4 }
    ];
  }
}

module.exports = new ScenarioGenerator();
