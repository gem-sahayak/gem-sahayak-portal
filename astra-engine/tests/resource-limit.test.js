'use strict';

const pluginLimits = require('../core/plugins/limits');

async function runResourceLimitTests() {
  console.log('=== RUNNING PLUGIN RESOURCE LIMITS UNIT TESTS ===');

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

  pluginLimits.reset();
  const resNormal = pluginLimits.checkLimits('test-p', 20.0, 15.0);
  assert(resNormal.exceeded === false, 'Allows plugin within resource limits');

  const resExceeded = pluginLimits.checkLimits('test-p', 80.0, 15.0); // 65MB delta > 50MB limit
  assert(resExceeded.exceeded === true, 'Detects memory heap delta limit violation');

  console.log(`\nResource Limit Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runResourceLimitTests().catch(err => {
  console.error('Resource Limit Test Error:', err);
  process.exit(1);
});
