'use strict';

const statusBar = require('../studio/statusBar');

async function runStatusBarTests() {
  console.log('=== RUNNING STATUS BAR UNIT TESTS ===');

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

  const res = statusBar.renderStatus('TestProject', 7);
  assert(res.project === 'TestProject', 'Renders active project name');
  assert(res.version === '1.7.0', 'Includes version 1.7.0');

  console.log(`\nStatus Bar Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runStatusBarTests().catch(err => {
  console.error('Status Bar Test Error:', err);
  process.exit(1);
});
