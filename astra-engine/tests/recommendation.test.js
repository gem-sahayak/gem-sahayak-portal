'use strict';

const recommendationsModel = require('../recommendations');

async function runRecommendationTests() {
  console.log('=== RUNNING RECOMMENDATION MODELS UNIT TESTS ===');

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

  const all = recommendationsModel.getAllRecommendations();
  assert(all.length >= 6, 'Generates recommendations across all 6 models');

  console.log(`\nRecommendation Models Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRecommendationTests().catch(err => {
  console.error('Recommendation Models Test Error:', err);
  process.exit(1);
});
