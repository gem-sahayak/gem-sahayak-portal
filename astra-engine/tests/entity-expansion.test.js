'use strict';

const entityExpansionEngine = require('../engines/optimizer/entityExpansion');

async function runEntityExpansionTests() {
  console.log('=== RUNNING ENTITY EXPANSION ENGINE UNIT TESTS ===');

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

  const res = entityExpansionEngine.generateEntityExpansions({ slug: 'udyam-error', title: 'Udyam Error' });
  assert(res.missingEntities.length >= 1, 'Identifies missing supporting entities');

  console.log(`\nEntity Expansion Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEntityExpansionTests().catch(err => {
  console.error('Entity Expansion Test Error:', err);
  process.exit(1);
});
