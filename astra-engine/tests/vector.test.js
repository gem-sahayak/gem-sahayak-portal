'use strict';

const vectorStore = require('../engines/knowledge/vectorStore');

async function runVectorTests() {
  console.log('=== RUNNING VECTOR STORE UNIT TESTS ===');

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

  vectorStore.insert('chk-test-1', [0.1, 0.2, 0.3], { title: 'Test' });
  const results = vectorStore.search([0.1, 0.2, 0.3], 1);

  assert(results.length === 1, 'Inserts and retrieves vector embedding');
  assert(results[0].similarityScore === 1.0, 'Calculates exact Cosine Similarity of 1.0 for identical vectors');

  console.log(`\nVector Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runVectorTests().catch(err => {
  console.error('Vector Test Error:', err);
  process.exit(1);
});
