'use strict';

const dependencyExplorer = require('../graphExplorer/dependencyExplorer');

async function runDependencyNetworkTests() {
  console.log('=== RUNNING DEPENDENCY NETWORK UNIT TESTS ===');

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

  const net = dependencyExplorer.buildDependencyNetwork();
  assert(net.nodes.length === 4, 'Builds 4 module dependency nodes');
  assert(net.edges.length === 3, 'Builds dependency edges payload');

  console.log(`\nDependency Network Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDependencyNetworkTests().catch(err => {
  console.error('Dependency Network Test Error:', err);
  process.exit(1);
});
