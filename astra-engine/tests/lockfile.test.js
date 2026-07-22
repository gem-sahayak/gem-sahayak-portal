'use strict';

const pluginLockfile = require('../core/plugins/lockfile');

async function runLockfileTests() {
  console.log('=== RUNNING PLUGIN LOCKFILE UNIT TESTS ===');

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

  const lockData = pluginLockfile.generateLockfile();
  assert(lockData.lockfileVersion === '1.0.0', 'Lockfile specifies lockfile version');
  assert(typeof lockData.plugins === 'object', 'Lockfile contains plugins mapping');

  console.log(`\nLockfile Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runLockfileTests().catch(err => {
  console.error('Lockfile Test Error:', err);
  process.exit(1);
});
