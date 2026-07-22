'use strict';

const { pluginTrustManager, TRUST_LEVELS } = require('../core/plugins/trust');

async function runTrustTests() {
  console.log('=== RUNNING PLUGIN TRUST FRAMEWORK UNIT TESTS ===');

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

  // 1. Official trust level
  const officialManifest = { id: 'official-p', publisher: 'ASTRA Core Team' };
  const trustOfficial = pluginTrustManager.getTrustLevel(officialManifest, true);
  assert(trustOfficial === TRUST_LEVELS.OFFICIAL, 'Resolves OFFICIAL trust level for core signed plugins');

  // 2. Blocked trust level
  const blockedManifest = { id: 'bad-p', trustLevel: 'BLOCKED' };
  const trustBlocked = pluginTrustManager.getTrustLevel(blockedManifest, false);
  assert(trustBlocked === TRUST_LEVELS.BLOCKED, 'Resolves BLOCKED trust level for blocked plugins');
  assert(pluginTrustManager.isExecutionAllowed(trustBlocked) === false, 'Prevents execution of BLOCKED plugins');

  console.log(`\nTrust Framework Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTrustTests().catch(err => {
  console.error('Trust Test Error:', err);
  process.exit(1);
});
