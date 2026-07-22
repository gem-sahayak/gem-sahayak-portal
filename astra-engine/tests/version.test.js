'use strict';

const releaseVersionManager = require('../core/release/versionManager');

async function runReleaseVersionTests() {
  console.log('=== RUNNING RELEASE VERSION MANAGER UNIT TESTS ===');

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

  assert(releaseVersionManager.bumpVersion('1.3.2', 'minor') === '1.4.0', 'Bumps 1.3.2 to 1.4.0 on minor bump');
  assert(releaseVersionManager.bumpVersion('1.3.2', 'patch') === '1.3.3', 'Bumps 1.3.2 to 1.3.3 on patch bump');

  console.log(`\nRelease Version Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReleaseVersionTests().catch(err => {
  console.error('Release Version Test Error:', err);
  process.exit(1);
});
