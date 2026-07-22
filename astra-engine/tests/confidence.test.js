'use strict';

const confidenceEngine = require('../decision/confidenceEngine');

async function runConfidenceTests() {
  console.log('=== RUNNING CONFIDENCE ENGINE UNIT TESTS ===');

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

  const c1 = confidenceEngine.calculateConfidence(1);
  assert(c1 === 0.75, 'Calculates 75% confidence for 1 evidence item');

  const c2 = confidenceEngine.calculateConfidence(5);
  assert(c2 === 0.95, 'Calculates 95% confidence for 5 evidence items');

  console.log(`\nConfidence Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runConfidenceTests().catch(err => {
  console.error('Confidence Engine Test Error:', err);
  process.exit(1);
});
