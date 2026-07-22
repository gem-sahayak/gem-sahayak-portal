'use strict';

class SimulationSerializer {
  serialize(simulationData) {
    return JSON.stringify(simulationData, null, 2);
  }
}

module.exports = new SimulationSerializer();
