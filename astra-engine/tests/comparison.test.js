'use strict';

const strategyComparator = require('../optimizerEngine/strategyComparator');

async function runComparisonTests() {
  console.log('=== RUNNING STRATEGY COMPARISON UNIT TESTS ===');

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

  const res = strategyComparator.compare([
    { id: 'S1', estimatedRuntimeMs: 100 },
    { id: 'S2', estimatedRuntimeMs: 20 }
  ]);

  assert(res.bestStrategy.id === 'S2', 'Compares strategies and picks lowest latency');

  console.log(`\nComparison Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runComparisonTests().catch(err => {
  console.error('Comparison Test Error:', err);
  process.exit(1);
});
