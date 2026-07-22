'use strict';

const { recommendationEngine } = require('../decision');

async function runDecisionTests() {
  console.log('=== RUNNING DECISION INTELLIGENCE UNIT TESTS ===');

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

  const recs = recommendationEngine.processRecommendations([{ title: 'Test Rec', impact: 'HIGH' }]);
  assert(recs.length === 1, 'Processes recommendations payload');
  assert(recs[0].score > 0, 'Computes weighted decision score');

  console.log(`\nDecision Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDecisionTests().catch(err => {
  console.error('Decision Test Error:', err);
  process.exit(1);
});
