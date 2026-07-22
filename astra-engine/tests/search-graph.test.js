'use strict';

const searchEngine = require('../graphExplorer/search');

async function runSearchGraphTests() {
  console.log('=== RUNNING SEARCH GRAPH UNIT TESTS ===');

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

  const nodes = [
    { id: 'art-udyam', label: 'Udyam Guide', type: 'ARTICLE' },
    { id: 'art-emd', label: 'EMD Guide', type: 'ARTICLE' }
  ];

  const results = searchEngine.searchNodes(nodes, 'udyam');

  assert(results.length === 1, 'Filters graph nodes matching query string');
  assert(results[0].id === 'art-udyam', 'Matched node ID is art-udyam');

  console.log(`\nSearch Graph Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSearchGraphTests().catch(err => {
  console.error('Search Graph Test Error:', err);
  process.exit(1);
});
