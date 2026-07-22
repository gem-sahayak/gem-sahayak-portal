'use strict';

const path = require('path');
const fs = require('fs');
const sdkManager = require('../sdk/cliManager');

async function runSdkTests() {
  console.log('=== RUNNING PLUGIN SDK CLI TOOLING UNIT TESTS ===');

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

  const info = sdkManager.initSdk();
  assert(info.status === 'OK', 'SDK initializes developer workspace');

  const createRes = sdkManager.createPlugin('Test Scaffolding Plugin');
  assert(fs.existsSync(createRes.targetDir), 'SDK scaffolds new read-only plugin package directory');

  // Clean up
  fs.rmSync(createRes.targetDir, { recursive: true, force: true });

  console.log(`\nSDK Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSdkTests().catch(err => {
  console.error('SDK Test Error:', err);
  process.exit(1);
});
