'use strict';

const recommendationEngine = require('../engines/semantic/recommendation');

async function runRecommendationTests() {
  console.log('=== RUNNING SEMANTIC RECOMMENDATION UNIT TESTS ===');

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

  const recs = recommendationEngine.generateRecommendations(
    [{ winnerSlug: 'page-a', competingSlugs: ['page-b'], targetKeyword: 'emd rules', recommendation: 'Fix cannibalization', confidence: 0.92 }],
    [],
    { missing: [] }
  );

  assert(recs.length === 1, 'Generates recommendation from cannibalization issue');
  assert(recs[0].priority === 'P1', 'Assigns P1 priority to cannibalization fixes');

  console.log(`\nRecommendation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRecommendationTests().catch(err => {
  console.error('Recommendation Test Error:', err);
  process.exit(1);
});
