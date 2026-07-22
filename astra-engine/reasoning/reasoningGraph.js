'use strict';

class ReasoningGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(id, type, val) {
    this.nodes.set(String(id), { id: String(id), type, val });
  }

  addEdge(src, tgt, relation) {
    this.edges.push({ source: String(src), target: String(tgt), relation });
  }

  getGraph() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges
    };
  }
}

module.exports = ReasoningGraph;
