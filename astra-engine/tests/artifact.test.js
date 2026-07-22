'use strict';

const fs = require('fs');
const path = require('path');
const releaseManager = require('../core/release/releaseManager');

async function runArtifactTests() {
  console.log('=== RUNNING ARTIFACT GENERATOR UNIT TESTS ===');

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
  assert(fs.existsSync(pkg.summaryPath), 'Exports release summary JSON artifact');

  console.log(`\nArtifact Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runArtifactTests().catch(err => {
  console.error('Artifact Test Error:', err);
  process.exit(1);
});
