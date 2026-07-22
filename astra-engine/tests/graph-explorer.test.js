'use strict';

const { explorerEngine } = require('../graphExplorer');

async function runGraphExplorerTests() {
  console.log('=== RUNNING GRAPH EXPLORER BASIC UNIT TESTS ===');

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

  assert(explorerEngine.manifest.name === 'Enterprise Visual Knowledge Graph Explorer', 'Explorer returns correct manifest name');
  assert(explorerEngine.manifest.version === '1.8.0', 'Explorer returns version 1.8.0');

  console.log(`\nGraph Explorer Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runGraphExplorerTests().catch(err => {
  console.error('Graph Explorer Test Error:', err);
  process.exit(1);
});
