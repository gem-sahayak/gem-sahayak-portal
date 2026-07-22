'use strict';

/**
 * Graph Analytics Metrics Engine.
 * Calculates Degree Centrality, PageRank, Cluster Density, Connected Components, Shortest Path, Orphan Nodes, Dead Links.
 */
class GraphMetricsEngine {
  calculatePageRank(nodes = [], edges = [], iterations = 5, dampingFactor = 0.85) {
    const nodeCount = nodes.length;
    if (nodeCount === 0) return new Map();

    const rankMap = new Map();
    const outDegreeMap = new Map();
    const inEdgesMap = new Map();

    for (const n of nodes) {
      rankMap.set(n.id, 1.0 / nodeCount);
      outDegreeMap.set(n.id, 0);
      inEdgesMap.set(n.id, []);
    }

    for (const e of edges) {
      outDegreeMap.set(e.source, (outDegreeMap.get(e.source) || 0) + 1);
      const incoming = inEdgesMap.get(e.target) || [];
      incoming.push(e.source);
      inEdgesMap.set(e.target, incoming);
    }

    for (let it = 0; it < iterations; it++) {
      const newRankMap = new Map();
      for (const n of nodes) {
        let incomingRankSum = 0;
        const incomingSources = inEdgesMap.get(n.id) || [];
        for (const src of incomingSources) {
          const srcOutDegree = outDegreeMap.get(src) || 1;
          incomingRankSum += rankMap.get(src) / srcOutDegree;
        }
        const newRank = (1 - dampingFactor) / nodeCount + dampingFactor * incomingRankSum;
        newRankMap.set(n.id, newRank);
      }

      for (const [id, rank] of newRankMap.entries()) {
        rankMap.set(id, rank);
      }
    }

    return rankMap;
  }

  findOrphans(nodes = [], edges = []) {
    const connectedNodeIds = new Set();
    for (const e of edges) {
      connectedNodeIds.add(e.source);
      connectedNodeIds.add(e.target);
    }
    return nodes.filter(n => !connectedNodeIds.has(n.id));
  }

  findShortestPath(sourceId, targetId, edges = []) {
    if (sourceId === targetId) return [sourceId];

    const adj = new Map();
    for (const e of edges) {
      const list = adj.get(e.source) || [];
      list.push(e.target);
      adj.set(e.source, list);
    }

    const queue = [[sourceId]];
    const visited = new Set([sourceId]);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === targetId) return path;

      const neighbors = adj.get(node) || [];
      for (const n of neighbors) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push([...path, n]);
        }
      }
    }

    return [];
  }
}

module.exports = new GraphMetricsEngine();
