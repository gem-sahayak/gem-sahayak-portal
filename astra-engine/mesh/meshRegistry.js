'use strict';

class MeshRegistry {
  constructor() {
    this.nodes = new Map();
  }

  registerNode(nodeId, metadata = {}) {
    this.nodes.set(nodeId, { nodeId, metadata, registeredAt: new Date().toISOString() });
  }

  getNodes() {
    return Array.from(this.nodes.values());
  }
}

module.exports = new MeshRegistry();
