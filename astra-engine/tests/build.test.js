'use strict';

const buildValidator = require('../core/build/validator');

async function runBuildTests() {
  console.log('=== RUNNING BUILD VERIFICATION UNIT TESTS ===');

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

  const bRes = buildValidator.validateBuild();
  assert(bRes.passed === true, 'Build verification passes core file integrity check');
  assert(bRes.durationMs < 500, 'Build verification completes in under 500 ms');

  console.log(`\nBuild Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runBuildTests().catch(err => {
  console.error('Build Test Error:', err);
  process.exit(1);
});
