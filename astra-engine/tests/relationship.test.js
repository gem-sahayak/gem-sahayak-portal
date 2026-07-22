'use strict';

const relationshipExplorer = require('../graphExplorer/relationshipExplorer');

async function runRelationshipTests() {
  console.log('=== RUNNING RELATIONSHIP EXPLORER UNIT TESTS ===');

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

  const path = relationshipExplorer.findPath('A', 'C', [
    { source: 'A', target: 'B' },
    { source: 'B', target: 'C' }
  ]);

  assert(path.join('->') === 'A->B->C', 'Finds multi-hop relationship path A->B->C');

  console.log(`\nRelationship Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRelationshipTests().catch(err => {
  console.error('Relationship Test Error:', err);
  process.exit(1);
});
