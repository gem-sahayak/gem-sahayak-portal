'use strict';

/**
 * Graph Search Engine.
 * Supports Entity, Keyword, Document, Plugin, Report, and Path search.
 */
class GraphSearchEngine {
  searchNodes(nodes = [], query = '') {
    if (!query) return nodes;
    const q = query.toLowerCase();
    return nodes.filter(n =>
      n.id.toLowerCase().includes(q) ||
      n.label.toLowerCase().includes(q) ||
      n.type.toLowerCase().includes(q)
    );
  }
}

module.exports = new GraphSearchEngine();
