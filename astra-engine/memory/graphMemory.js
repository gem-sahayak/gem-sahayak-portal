'use strict';

class GraphMemory {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(id, type, val) {
    this.nodes.set(String(id), { id: String(id), type, val });
  }

  addEdge(src, tgt, rel) {
    this.edges.push({ source: String(src), target: String(tgt), relation: rel });
  }
}

module.exports = new GraphMemory();
