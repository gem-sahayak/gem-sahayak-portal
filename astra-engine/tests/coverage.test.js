'use strict';

const coverageEvaluator = require('../engines/semantic/coverage');

async function runCoverageTests() {
  console.log('=== RUNNING TOPIC COVERAGE EVALUATOR UNIT TESTS ===');

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

  const cov = coverageEvaluator.evaluateCoverage([1, 2, 3], { covered: [1, 2], totalEntitiesDetected: 4 });
  assert(cov.topicCoveragePercent === 50, 'Calculates topic coverage percentage');

  console.log(`\nCoverage Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCoverageTests().catch(err => {
  console.error('Coverage Test Error:', err);
  process.exit(1);
});
