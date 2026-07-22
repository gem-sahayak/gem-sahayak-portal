'use strict';

const { strategyEngine } = require('../strategy');

async function runStrategyTests() {
  console.log('=== RUNNING STRATEGY ENGINE UNIT TESTS ===');

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

  const res = strategyEngine.evaluateStrategies();
  assert(res.primary.length >= 1, 'Generates primary strategies list');
  assert(res.recommended.name.length > 0, 'Recommends best strategy');

  console.log(`\nStrategy Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runStrategyTests().catch(err => {
  console.error('Strategy Test Error:', err);
  process.exit(1);
});
