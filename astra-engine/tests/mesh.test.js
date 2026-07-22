'use strict';

const { meshEngine, meshRegistry } = require('../mesh');

async function runMeshTests() {
  console.log('=== RUNNING MESH ENGINE UNIT TESTS ===');

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

  const res = meshEngine.runMesh();
  assert(res.status === 'OPERATIONAL', 'Runs multi-agent mesh operational status');
  assert(res.topology.nodesCount >= 2, 'Registers nodes in mesh topology');

  console.log(`\nMesh Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runMeshTests().catch(err => {
  console.error('Mesh Test Error:', err);
  process.exit(1);
});
