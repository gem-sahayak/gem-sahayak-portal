'use strict';

const graphMetrics = require('../graphExplorer/graphMetrics');

async function runOrphanTests() {
  console.log('=== RUNNING ORPHAN NODES ANALYTICS UNIT TESTS ===');

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

  const nodes = [{ id: 'A' }, { id: 'B' }, { id: 'ORPHAN-NODE' }];
  const edges = [{ source: 'A', target: 'B' }];

  const orphans = graphMetrics.findOrphans(nodes, edges);

  assert(orphans.length === 1, 'Identifies isolated orphan nodes');
  assert(orphans[0].id === 'ORPHAN-NODE', 'Identifies correct orphan node ID');

  console.log(`\nOrphan Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runOrphanTests().catch(err => {
  console.error('Orphan Test Error:', err);
  process.exit(1);
});
