'use strict';

const { studioWorkspace } = require('../studio');

async function runStudioTests() {
  console.log('=== RUNNING STUDIO BASIC UNIT TESTS ===');

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

  assert(studioWorkspace.manifest.name === 'ASTRA Studio Foundation', 'Studio returns correct manifest name');
  assert(studioWorkspace.manifest.version === '1.7.0', 'Studio returns version 1.7.0');

  console.log(`\nStudio Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runStudioTests().catch(err => {
  console.error('Studio Test Error:', err);
  process.exit(1);
});
