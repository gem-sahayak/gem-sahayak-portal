'use strict';

const graphMetrics = require('./graphMetrics');

/**
 * Multi-Hop Relationship Explorer.
 */
class RelationshipExplorer {
  findPath(sourceId, targetId, edges = []) {
    return graphMetrics.findShortestPath(sourceId, targetId, edges);
  }
}

module.exports = new RelationshipExplorer();
