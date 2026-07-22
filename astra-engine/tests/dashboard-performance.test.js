'use strict';

const performanceDashboard = require('../dashboard/performanceDashboard');

async function runDashboardPerformanceTests() {
  console.log('=== RUNNING DASHBOARD PERFORMANCE UNIT TESTS ===');

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

  const res = performanceDashboard.renderPerformance();
  assert(res.memoryHeapMB > 0, 'Reports non-zero memory heap usage in MB');
  assert(res.processingSpeedDocsPerSec.includes('docs/sec'), 'Includes processing speed metrics');

  console.log(`\nDashboard Performance Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardPerformanceTests().catch(err => {
  console.error('Dashboard Performance Test Error:', err);
  process.exit(1);
});
