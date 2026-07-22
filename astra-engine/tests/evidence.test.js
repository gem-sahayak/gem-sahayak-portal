'use strict';

const evidenceCollector = require('../reasoning/evidenceCollector');

async function runEvidenceTests() {
  console.log('=== RUNNING EVIDENCE COLLECTOR UNIT TESTS ===');

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

  const list = evidenceCollector.collectEvidence();
  assert(list.length >= 2, 'Collects empirical evidence items');

  console.log(`\nEvidence Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEvidenceTests().catch(err => {
  console.error('Evidence Test Error:', err);
  process.exit(1);
});
