'use strict';

const { reviewEngine, MockAiAdapter } = require('../engines/review');

async function runReviewTests() {
  console.log('=== RUNNING AI REVIEW ENGINE BASIC UNIT TESTS ===');

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

  const mockAdapter = new MockAiAdapter();
  const res = await mockAdapter.review({ slug: 'udyam-error', title: 'GeM Portal Udyam Aadhaar Verification Failure' });

  assert(res.slug === 'udyam-error', 'Mock Adapter evaluates target article slug');
  assert(typeof res.intentScore === 'number', 'Calculates numeric intent score');

  console.log(`\nReview Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReviewTests().catch(err => {
  console.error('Review Test Error:', err);
  process.exit(1);
});
