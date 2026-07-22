'use strict';

/**
 * Graph Filtering Engine.
 * Filters nodes and edges by type, score, keyword, or report metadata.
 */
class GraphFiltersEngine {
  filterGraph(nodes = [], edges = [], options = {}) {
    let filteredNodes = nodes;
    let filteredEdges = edges;

    if (options.nodeType) {
      filteredNodes = filteredNodes.filter(n => n.type === options.nodeType);
    }
    if (options.edgeType) {
      filteredEdges = filteredEdges.filter(e => e.type === options.edgeType);
    }

    const nodeIds = new Set(filteredNodes.map(n => n.id));
    filteredEdges = filteredEdges.filter(e => nodeIds.has(e.source) && nodeIds.has(e.target));

    return {
      nodes: filteredNodes,
      edges: filteredEdges
    };
  }
}

module.exports = new GraphFiltersEngine();
