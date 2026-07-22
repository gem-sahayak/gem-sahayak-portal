'use strict';

const contentGapEngine = require('../engines/optimizer/contentGap');

async function runContentGapTests() {
  console.log('=== RUNNING CONTENT GAP ENGINE UNIT TESTS ===');

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

  const res = contentGapEngine.calculateGaps({ slug: 'udyam-error', summary: 'Short summary' });
  assert(res.coveragePercent === 70, 'Calculates coverage percentage for short content summary');

  console.log(`\nContent Gap Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runContentGapTests().catch(err => {
  console.error('Content Gap Test Error:', err);
  process.exit(1);
});
