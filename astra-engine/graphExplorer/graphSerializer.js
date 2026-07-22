'use strict';

/**
 * Graph Serializer.
 * Exports graph payload into standard JSON, D3 force-directed, and Cytoscape formats.
 */
class GraphSerializer {
  serializeD3(nodes = [], edges = []) {
    return {
      nodes: nodes.map(n => ({ id: n.id, group: n.type, label: n.label, rank: n.pageRank })),
      links: edges.map(e => ({ source: e.source, target: e.target, value: e.weight, type: e.type }))
    };
  }

  serializeCytoscape(nodes = [], edges = []) {
    const elements = [];
    for (const n of nodes) elements.push({ data: { id: n.id, label: n.label, type: n.type } });
    for (const e of edges) elements.push({ data: { id: e.id, source: e.source, target: e.target, type: e.type } });
    return elements;
  }
}

module.exports = new GraphSerializer();
