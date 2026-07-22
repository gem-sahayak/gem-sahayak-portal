'use strict';

const { dashboardEngine } = require('../dashboard');

async function runDashboardTests() {
  console.log('=== RUNNING DASHBOARD ENGINE BASIC UNIT TESTS ===');

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

  assert(dashboardEngine.manifest.name === 'Enterprise Intelligence Dashboard', 'Dashboard returns correct manifest name');
  assert(dashboardEngine.manifest.version === '1.7.1', 'Dashboard returns version 1.7.1');

  console.log(`\nDashboard Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardTests().catch(err => {
  console.error('Dashboard Test Error:', err);
  process.exit(1);
});
