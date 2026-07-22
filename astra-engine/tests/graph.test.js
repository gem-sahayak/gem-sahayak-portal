'use strict';

const graphBuilder = require('../core/graph');
const graphValidator = require('../core/validators/graph.validator');
const entityValidator = require('../core/validators/entity.validator');

async function runGraphTests() {
  console.log('=== RUNNING KNOWLEDGE GRAPH ENGINE UNIT & FIXTURE TESTS ===');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // Sample Clean Registry Topology
  const cleanRegistry = {
    categories: [{ slug: 'gem-bidding', name: 'GeM Bidding' }],
    articles: [
      { slug: 'l1-pricing-guide', category: 'gem-bidding', relatedArticles: ['bid-rejection-reasons'], relatedTools: ['bid-analyzer'] },
      { slug: 'bid-rejection-reasons', category: 'gem-bidding', relatedArticles: ['l1-pricing-guide'], relatedTools: ['bid-analyzer'] }
    ],
    tools: [{ slug: 'bid-analyzer', name: 'Bid Analyzer' }],
    faqs: []
  };

  // Sample Fixture with Self Loop and Orphan Nodes
  const brokenRegistry = {
    categories: [{ slug: 'gem-bidding', name: 'GeM Bidding' }],
    articles: [
      { slug: 'self-loop-node', category: 'gem-bidding', relatedArticles: ['self-loop-node'] }, // self loop
      { slug: 'standalone-orphan-article', category: null, relatedArticles: [] } // true orphan article (0 inbound)
    ],
    tools: [{ slug: 'unused-orphan-tool', name: 'Unused Tool' }],
    faqs: []
  };

  // 1. Graph Builder Test
  const topology = graphBuilder.buildGraph(cleanRegistry);
  assert(topology.nodes.length >= 4, 'Graph Builder creates Category, Article, and Tool nodes');
  assert(topology.graphMetrics.totalEdges >= 4, 'Graph Builder connects parent-child, related-article, and uses-tool edges');

  // 2. Graph Validator Clean Test
  const cleanRes = graphValidator.validate(topology);
  assert(cleanRes.errors.length === 0, 'Clean Graph Topology has 0 errors');

  // 3. Graph Validator Broken Test
  const brokenTopology = graphBuilder.buildGraph(brokenRegistry);
  const brokenRes = graphValidator.validate(brokenTopology);

  assert(brokenRes.errors.some(e => e.code === 'SELF_LOOP_DETECTED'), 'Detects SELF_LOOP_DETECTED error');
  assert(brokenRes.warnings.some(w => w.code === 'ORPHAN_ARTICLE_NODE'), 'Detects ORPHAN_ARTICLE_NODE warning');
  assert(brokenRes.warnings.some(w => w.code === 'ORPHAN_TOOL_NODE'), 'Detects ORPHAN_TOOL_NODE warning');

  // 4. Entity Validator Test
  const entitiesMap = new Map();
  entitiesMap.set('valid-entity', { Entity: 'valid-entity', Category: 'gem-bidding', Parent: null });
  entitiesMap.set('broken-entity', { Entity: 'broken-entity', Category: 'gem-bidding', Parent: 'non-existent-parent' });

  const entityRes = entityValidator.validate(entitiesMap);
  assert(entityRes.warnings.some(w => w.code === 'UNRESOLVED_PARENT_ENTITY'), 'Detects UNRESOLVED_PARENT_ENTITY warning');

  console.log(`\nKnowledge Graph Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runGraphTests().catch(err => {
  console.error('Graph Test Error:', err);
  process.exit(1);
});
