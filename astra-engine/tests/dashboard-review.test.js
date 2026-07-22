'use strict';

const reviewDashboard = require('../dashboard/reviewDashboard');

async function runDashboardReviewTests() {
  console.log('=== RUNNING DASHBOARD REVIEW UNIT TESTS ===');

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

  const res = reviewDashboard.renderReview();
  assert(res.eeatScore === 88, 'Includes EEAT score of 88');

  console.log(`\nDashboard Review Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardReviewTests().catch(err => {
  console.error('Dashboard Review Test Error:', err);
  process.exit(1);
});
