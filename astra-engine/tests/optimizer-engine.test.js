'use strict';

const { executionOptimizer } = require('../optimizerEngine');

async function runOptimizerEngineTests() {
  console.log('=== RUNNING OPTIMIZER ENGINE UNIT TESTS ===');

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

  const res = executionOptimizer.runOptimizer();
  assert(res.strategies.length === 3, 'Generates 3 execution strategies');
  assert(res.recommendedStrategy.id === 'Strategy-C', 'Recommends fastest cached execution strategy');

  console.log(`\nOptimizer Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runOptimizerEngineTests().catch(err => {
  console.error('Optimizer Engine Test Error:', err);
  process.exit(1);
});
