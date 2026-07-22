'use strict';

const versionManager = require('../core/plugins/version');

async function runVersionTests() {
  console.log('=== RUNNING PLUGIN VERSION MANAGER UNIT TESTS ===');

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

  assert(versionManager.compareSemver('1.3.1', '1.2.0') === 1, 'SemVer 1.3.1 > 1.2.0');
  assert(versionManager.compareSemver('1.3.1', '1.3.1') === 0, 'SemVer 1.3.1 === 1.3.1');
  assert(versionManager.compareSemver('1.1.0', '1.2.0') === -1, 'SemVer 1.1.0 < 1.2.0');

  const compatManifest = {
    engineCompatibility: { minVersion: '1.2.0', maxVersion: '2.0.0' }
  };

  const resCompat = versionManager.validateEngineCompatibility(compatManifest, '1.3.1');
  assert(resCompat.compatible === true, 'Engine version 1.3.1 is compatible with [1.2.0, 2.0.0]');

  console.log(`\nVersion Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runVersionTests().catch(err => {
  console.error('Version Test Error:', err);
  process.exit(1);
});
