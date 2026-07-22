'use strict';

const cannibalizationDetector = require('../engines/semantic/cannibalization');

async function runCannibalizationTests() {
  console.log('=== RUNNING KEYWORD CANNIBALIZATION UNIT TESTS ===');

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

  const res = cannibalizationDetector.detectCannibalization([
    { slug: 'what-is-emd-in-gem', title: 'What is EMD in GeM?' },
    { slug: 'emd-exemption-rules', title: 'EMD Exemption Rules on GeM Portal' }
  ]);

  assert(res.length >= 1, 'Detects keyword cannibalization conflict between pages');
  assert(res[0].targetKeyword === 'emd rules', 'Identifies target cannibalized keyword topic');

  console.log(`\nCannibalization Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCannibalizationTests().catch(err => {
  console.error('Cannibalization Test Error:', err);
  process.exit(1);
});
