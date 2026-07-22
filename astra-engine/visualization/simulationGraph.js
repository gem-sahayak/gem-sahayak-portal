'use strict';

class SimulationGraphVisualizer {
  renderGraph() {
    return { type: 'SIMULATION_GRAPH', nodes: 5, edges: 4 };
  }
}

module.exports = new SimulationGraphVisualizer();
