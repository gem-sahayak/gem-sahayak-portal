'use strict';

class SimulationValidator {
  validateScenario(scenario) {
    const errors = [];
    if (!scenario.id) errors.push('Scenario missing id');
    if (!scenario.steps || !Array.isArray(scenario.steps)) errors.push('Scenario steps must be array');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = new SimulationValidator();
