'use strict';

const releaseManager = require('../core/release/releaseManager');
const fs = require('fs');

async function runReleaseTests() {
  console.log('=== RUNNING RELEASE AUTOMATION UNIT TESTS ===');

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

  const pkg = releaseManager.generateReleasePackage('1.4.0', 'astra-engine-v1.4.0-phase4B.4');
  assert(fs.existsSync(pkg.jsonPath), 'Generates release.json artifact file');
  assert(fs.existsSync(pkg.mdPath), 'Generates release.md Markdown release notes file');
  assert(fs.existsSync(pkg.htmlPath), 'Generates release.html Document file');
  assert(fs.existsSync(pkg.summaryPath), 'Generates release-summary.json file');

  console.log(`\nRelease Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReleaseTests().catch(err => {
  console.error('Release Test Error:', err);
  process.exit(1);
});
