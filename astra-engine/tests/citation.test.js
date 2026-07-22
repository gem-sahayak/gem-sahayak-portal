'use strict';

const citationEngine = require('../engines/knowledge/citationEngine');

async function runCitationTests() {
  console.log('=== RUNNING CITATION ENGINE UNIT TESTS ===');

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

  const formatted = citationEngine.formatCitations([
    { citationId: 'cit-1', title: 'Udyam Error Guide', url: 'https://sahayakai.co.in/guides/udyam-error', chunkId: 'chk-1' }
  ]);

  assert(formatted.length === 1, 'Formats primary citation references');
  assert(formatted[0].referenceText.includes('Udyam Error Guide'), 'Includes title in formatted citation');

  console.log(`\nCitation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCitationTests().catch(err => {
  console.error('Citation Test Error:', err);
  process.exit(1);
});
