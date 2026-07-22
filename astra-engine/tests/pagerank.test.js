'use strict';

const graphMetrics = require('../graphExplorer/graphMetrics');

async function runPageRankTests() {
  console.log('=== RUNNING PAGERANK ANALYTICS UNIT TESTS ===');

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

  const nodes = [{ id: 'A' }, { id: 'B' }];
  const edges = [{ source: 'A', target: 'B' }];

  const rankMap = graphMetrics.calculatePageRank(nodes, edges, 5);

  assert(rankMap.has('A') && rankMap.has('B'), 'Calculates PageRank scores for graph nodes');
  assert(rankMap.get('B') > rankMap.get('A'), 'Target node B receives higher PageRank than source node A');

  console.log(`\nPageRank Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPageRankTests().catch(err => {
  console.error('PageRank Test Error:', err);
  process.exit(1);
});
