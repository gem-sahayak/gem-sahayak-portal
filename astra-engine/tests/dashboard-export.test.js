'use strict';

const path = require('path');
const fs = require('fs');

async function runDashboardExportTests() {
  console.log('=== RUNNING DASHBOARD EXPORT UNIT TESTS ===');

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

  const reportPath = path.join(__dirname, '..', 'reports', 'latest', 'dashboard-report.json');
  assert(fs.existsSync(reportPath), 'Generates reports/latest/dashboard-report.json export file');

  console.log(`\nDashboard Export Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardExportTests().catch(err => {
  console.error('Dashboard Export Test Error:', err);
  process.exit(1);
});
