'use strict';

const explanationEngine = require('../explainability/explanationEngine');

async function runTraceTests() {
  console.log('=== RUNNING REASONING TRACE UNIT TESTS ===');

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

  const exp = explanationEngine.explainRecommendation('rec-100');
  assert(exp.reasoning.chain.length >= 2, 'Generates full reasoning trace chain');

  console.log(`\nTrace Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTraceTests().catch(err => {
  console.error('Trace Test Error:', err);
  process.exit(1);
});
