'use strict';

const meshCoordinator = require('./meshCoordinator');
const meshDiscovery = require('./meshDiscovery');
const meshMetrics = require('./meshMetrics');

class MeshEngine {
  runMesh() {
    meshMetrics.recordRouting();
    const coord = meshCoordinator.coordinateMesh();
    const nodes = meshDiscovery.discoverNodes();

    return {
      status: 'OPERATIONAL',
      topology: { nodesCount: nodes.length, nodes },
      coordinator: coord,
      metrics: meshMetrics.getMetrics()
    };
  }
}

module.exports = new MeshEngine();
