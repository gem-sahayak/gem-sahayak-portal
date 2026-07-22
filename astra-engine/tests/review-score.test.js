'use strict';

const scoringEngine = require('../engines/review/scoring');

async function runReviewScoreTests() {
  console.log('=== RUNNING AI REVIEW SCORING UNIT TESTS ===');

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

  const scores = scoringEngine.calculateAggregateScores([
    { intentScore: 96, eeatScore: 91, completenessScore: 88, authorityScore: 93, readabilityScore: 90, seoScore: 92, entityScore: 95, linkScore: 89, freshnessScore: 94 },
    { intentScore: 90, eeatScore: 95, completenessScore: 94, authorityScore: 93, readabilityScore: 90, seoScore: 92, entityScore: 95, linkScore: 89, freshnessScore: 94 }
  ]);

  assert(scores.overallScore >= 0 && scores.overallScore <= 100, 'Overall score is within 0-100 bound');
  assert(scores.categoryScores.intent === 93, 'Averages Intent score across articles');

  console.log(`\nReview Score Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReviewScoreTests().catch(err => {
  console.error('Review Score Test Error:', err);
  process.exit(1);
});
