'use strict';

const telemetryDashboard = require('../dashboard/telemetryDashboard');

async function runDashboardTelemetryTests() {
  console.log('=== RUNNING DASHBOARD TELEMETRY UNIT TESTS ===');

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

  const res = telemetryDashboard.renderTelemetry();
  assert(res.failuresCount === 0, 'Reports 0 failures count');
  assert(res.recentEvents.length >= 1, 'Includes recent activity events');

  console.log(`\nDashboard Telemetry Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardTelemetryTests().catch(err => {
  console.error('Dashboard Telemetry Test Error:', err);
  process.exit(1);
});
