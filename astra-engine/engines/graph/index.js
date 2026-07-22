'use strict';

const graphBuilder = require('../../core/graph');
const graphValidator = require('../../core/validators/graph.validator');
const entityValidator = require('../../core/validators/entity.validator');

class KnowledgeGraphEngine {
  constructor() {
    this.manifest = {
      name: 'knowledge-graph-engine',
      version: '1.1.0',
      owner: 'Astra Graph Core',
      capabilities: [
        'graph-topology',
        'hub-spoke-check',
        'orphan-detection',
        'cycle-detection',
        'cluster-depth',
        'entity-relationship-check'
      ],
      dependencies: []
    };
  }

  async init(context) {
    this.context = context;
  }

  async run(state) {
    const startTime = Date.now();
    const errors = [];
    const warnings = [];

    // 1. Construct Knowledge Graph Topology
    const topology = graphBuilder.buildGraph(state.parsedRegistry);

    // 2. Validate Graph Topology (Orphans, Dead Ends, Loops, Disconnected Clusters)
    const graphRes = graphValidator.validate(topology);
    errors.push(...graphRes.errors);
    warnings.push(...graphRes.warnings);

    // 3. Build Entities Map (from registry articles & categories)
    const entitiesMap = new Map();

    for (const cat of state.parsedRegistry.categories || []) {
      const catSlug = typeof cat === 'string' ? cat : cat.slug;
      if (catSlug) {
        entitiesMap.set(catSlug, {
          Entity: catSlug,
          Category: 'PillarCategory',
          Children: [],
          Aliases: [cat.name || catSlug]
        });
      }
    }

    for (const art of state.parsedRegistry.articles || []) {
      if (art.slug) {
        entitiesMap.set(art.slug, {
          Entity: art.slug,
          Category: art.category || 'Uncategorized',
          Parent: art.category ? art.category.toLowerCase().replace(/\s+/g, '-') : null,
          Children: art.relatedArticles || [],
          Aliases: [art.title]
        });
      }
    }

    // 4. Validate Entities
    const entityRes = entityValidator.validate(entitiesMap, state.parsedRegistry.articles || []);
    errors.push(...entityRes.errors);
    warnings.push(...entityRes.warnings);

    const executionTimeMs = Date.now() - startTime;
    const verdict = errors.length > 0 ? 'FAIL' : (warnings.length > 0 ? 'WARNING' : 'PASS');

    return {
      engineName: this.manifest.name,
      verdict,
      errors,
      warnings,
      executionTimeMs,
      graphMetrics: topology.graphMetrics
    };
  }
}

module.exports = new KnowledgeGraphEngine();
