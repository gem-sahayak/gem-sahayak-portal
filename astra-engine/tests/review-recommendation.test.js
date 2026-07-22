'use strict';

const recommendationEngine = require('../engines/review/recommendation');

async function runReviewRecommendationTests() {
  console.log('=== RUNNING AI REVIEW RECOMMENDATIONS UNIT TESTS ===');

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

  const recs = recommendationEngine.generateRecommendations([
    { type: 'MISSING_TOPIC_GAP', articleSlug: 'what-is-emd-in-gem', topics: ['Refund Timeline', 'Estimated Processing Time'], reason: 'Missing refund timeline', impact: 'HIGH', confidence: 0.96 }
  ]);

  assert(recs.length === 1, 'Generates actionable recommendation from semantic gap');
  assert(recs[0].articleSlug === 'what-is-emd-in-gem', 'Recommendation correctly maps to target article slug');
  assert(recs[0].confidence === 0.96, 'Includes confidence score metric');

  console.log(`\nReview Recommendation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReviewRecommendationTests().catch(err => {
  console.error('Review Recommendation Test Error:', err);
  process.exit(1);
});
