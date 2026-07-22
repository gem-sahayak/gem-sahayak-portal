'use strict';

/**
 * Edge Factory.
 * Instantiates graph edges supporting Internal Link, Semantic Similarity, Entity Relation, Dependency, Plugin Dependency, etc.
 */
class EdgeFactory {
  createEdge(sourceId, targetId, type, weight = 1.0, metadata = {}) {
    return {
      id: `${sourceId}->${targetId}:${type}`,
      source: String(sourceId),
      target: String(targetId),
      type, // 'INTERNAL_LINK' | 'SEMANTIC_SIMILARITY' | 'ENTITY_RELATION' | 'DEPENDENCY' | 'HUB_PILLAR' | 'PILLAR_SPOKE'
      weight,
      metadata
    };
  }
}

module.exports = new EdgeFactory();
