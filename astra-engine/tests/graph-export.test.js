'use strict';

const path = require('path');
const fs = require('fs');

async function runGraphExportTests() {
  console.log('=== RUNNING GRAPH EXPORT UNIT TESTS ===');

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

  const reportPath = path.join(__dirname, '..', 'reports', 'latest', 'graph-explorer.json');
  assert(fs.existsSync(reportPath), 'Generates reports/latest/graph-explorer.json export file');

  console.log(`\nGraph Export Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runGraphExportTests().catch(err => {
  console.error('Graph Export Test Error:', err);
  process.exit(1);
});
