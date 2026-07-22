'use strict';

const overviewDashboard = require('../dashboard/overviewDashboard');

async function runDashboardOverviewTests() {
  console.log('=== RUNNING DASHBOARD OVERVIEW UNIT TESTS ===');

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

  const res = overviewDashboard.renderOverview();
  assert(res.overallHealth === 'HEALTHY', 'Returns HEALTHY overall health');
  assert(res.scores.seo === 85, 'Includes SEO compliance score');

  console.log(`\nDashboard Overview Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardOverviewTests().catch(err => {
  console.error('Dashboard Overview Test Error:', err);
  process.exit(1);
});
