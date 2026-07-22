'use strict';

const settingsManager = require('../studio/settingsManager');

async function runSettingsTests() {
  console.log('=== RUNNING SETTINGS MANAGER UNIT TESTS ===');

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

  settingsManager.updateSettings({ theme: 'light' });
  const s = settingsManager.getSettings();

  assert(s.theme === 'light', 'Updates theme setting to light');

  console.log(`\nSettings Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSettingsTests().catch(err => {
  console.error('Settings Test Error:', err);
  process.exit(1);
});
