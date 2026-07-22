'use strict';

const path = require('path');
const reportExplorer = require('../studio/reportExplorer');

async function runReportExplorerTests() {
  console.log('=== RUNNING REPORT EXPLORER UNIT TESTS ===');

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

  const reportsDir = path.join(__dirname, '..', 'reports');
  const discovered = reportExplorer.discoverReports(reportsDir);

  assert(Array.isArray(discovered), 'Discovers report files in reports/ directory');
  assert(discovered.length >= 1, 'Discovers at least 1 report in reports/latest/');

  console.log(`\nReport Explorer Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReportExplorerTests().catch(err => {
  console.error('Report Explorer Test Error:', err);
  process.exit(1);
});
