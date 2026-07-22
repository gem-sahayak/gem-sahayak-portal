'use strict';

const strategyGenerator = require('../optimizerEngine/strategyGenerator');

async function runStrategyTests() {
  console.log('=== RUNNING STRATEGY GENERATOR UNIT TESTS ===');

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

  const list = strategyGenerator.generateStrategies();
  assert(list.length === 3, 'Generates 3 optimization strategies');

  console.log(`\nStrategy Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runStrategyTests().catch(err => {
  console.error('Strategy Test Error:', err);
  process.exit(1);
});
