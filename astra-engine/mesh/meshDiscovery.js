'use strict';

const meshRegistry = require('./meshRegistry');

class MeshDiscovery {
  discoverNodes() {
    return meshRegistry.getNodes();
  }
}

module.exports = new MeshDiscovery();
