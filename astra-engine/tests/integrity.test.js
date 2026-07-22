'use strict';

const integrityChecker = require('../core/build/integrity');

async function runIntegrityTests() {
  console.log('=== RUNNING BUILD INTEGRITY UNIT TESTS ===');

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

  const res = integrityChecker.checkCoreIntegrity();
  assert(res.valid === true, 'All essential core files exist in repository');

  console.log(`\nIntegrity Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runIntegrityTests().catch(err => {
  console.error('Integrity Test Error:', err);
  process.exit(1);
});
