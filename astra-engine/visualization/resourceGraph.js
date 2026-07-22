'use strict';

class ResourceGraphVisualizer {
  renderGraph() {
    return { type: 'RESOURCE_GRAPH', memoryMB: 45, cpuPercent: 15 };
  }
}

module.exports = new ResourceGraphVisualizer();
