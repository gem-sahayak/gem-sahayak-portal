'use strict';

const entityAnalyzer = require('../engines/semantic/entityAnalyzer');

async function runEntityTests() {
  console.log('=== RUNNING ENTITY ANALYZER UNIT TESTS ===');

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

  const res = entityAnalyzer.analyzeEntities([
    { title: 'GeM Portal Udyam Aadhaar Verification Failure', summary: 'Check Udyam and PAN match' },
    { title: 'What is EMD in GeM Portal?', summary: 'Earnest Money Deposit guidelines' }
  ]);

  assert(res.totalEntitiesDetected >= 8, 'Detects pre-populated enterprise entity list');
  assert(Array.isArray(res.covered), 'Returns covered entities array');

  console.log(`\nEntity Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEntityTests().catch(err => {
  console.error('Entity Test Error:', err);
  process.exit(1);
});
