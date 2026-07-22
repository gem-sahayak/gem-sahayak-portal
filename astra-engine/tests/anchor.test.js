'use strict';

const anchorTextGenerator = require('../engines/optimizer/anchorGenerator');

async function runAnchorTests() {
  console.log('=== RUNNING ANCHOR TEXT GENERATOR UNIT TESTS ===');

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

  const anchors = anchorTextGenerator.generateAnchors('udyam-error', 'Udyam Error Guide');
  assert(anchors.length === 6, 'Generates 6 anchor text variations (Natural, Exact, Partial, Brand, Question, Semantic)');
  assert(anchors.some(a => a.anchorType === 'NATURAL'), 'Includes NATURAL anchor variation');

  console.log(`\nAnchor Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runAnchorTests().catch(err => {
  console.error('Anchor Test Error:', err);
  process.exit(1);
});
