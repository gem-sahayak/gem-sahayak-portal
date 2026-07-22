'use strict';

const entityExplorer = require('../graphExplorer/entityExplorer');

async function runEntityNetworkTests() {
  console.log('=== RUNNING ENTITY NETWORK UNIT TESTS ===');

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

  const net = entityExplorer.buildEntityNetwork();
  assert(net.nodes.length >= 5, 'Builds entity network nodes list');
  assert(net.edges.length >= 1, 'Builds entity relation edges');

  console.log(`\nEntity Network Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEntityNetworkTests().catch(err => {
  console.error('Entity Network Test Error:', err);
  process.exit(1);
});
