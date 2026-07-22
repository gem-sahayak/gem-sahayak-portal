'use strict';

const internalLinkingEngine = require('../engines/optimizer/internalLinking');

async function runInternalLinkingTests() {
  console.log('=== RUNNING INTERNAL LINKING ENGINE UNIT TESTS ===');

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

  const recs = internalLinkingEngine.generateLinkRecommendations([
    { slug: 'udyam-error', title: 'Udyam Error', relatedTools: [] }
  ]);

  assert(recs.length >= 1, 'Recommends missing tool link CTA for articles lacking tool references');
  assert(recs[0].linkType === 'TOOL', 'Correctly sets linkType to TOOL');

  console.log(`\nInternal Linking Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runInternalLinkingTests().catch(err => {
  console.error('Internal Linking Test Error:', err);
  process.exit(1);
});
