'use strict';

const seoDashboard = require('../dashboard/seoDashboard');

async function runDashboardSeoTests() {
  console.log('=== RUNNING DASHBOARD SEO UNIT TESTS ===');

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

  const res = seoDashboard.renderSeo();
  assert(res.topKeywords.length >= 1, 'Includes top keywords list');
  assert(res.categoryClustersCount === 5, 'Includes 5 category clusters count');

  console.log(`\nDashboard SEO Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardSeoTests().catch(err => {
  console.error('Dashboard SEO Test Error:', err);
  process.exit(1);
});
