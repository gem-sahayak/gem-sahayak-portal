'use strict';

const navigationManager = require('../studio/navigation');

async function runNavigationTests() {
  console.log('=== RUNNING NAVIGATION MANAGER UNIT TESTS ===');

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

  const ok = navigationManager.navigate('knowledge');
  assert(ok === true, 'Navigates to Knowledge view');
  assert(navigationManager.getCurrentView() === 'knowledge', 'Current view updated to knowledge');

  console.log(`\nNavigation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runNavigationTests().catch(err => {
  console.error('Navigation Test Error:', err);
  process.exit(1);
});
