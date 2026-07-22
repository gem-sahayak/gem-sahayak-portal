'use strict';

const graphMetrics = require('../graphExplorer/graphMetrics');

async function runPathfindingTests() {
  console.log('=== RUNNING PATHFINDING UNIT TESTS ===');

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

  const path = graphMetrics.findShortestPath('X', 'Z', [
    { source: 'X', target: 'Y' },
    { source: 'Y', target: 'Z' }
  ]);

  assert(path.length === 3, 'Calculates shortest path length of 3 nodes');

  console.log(`\nPathfinding Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPathfindingTests().catch(err => {
  console.error('Pathfinding Test Error:', err);
  process.exit(1);
});
