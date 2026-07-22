'use strict';

const reranker = require('../engines/knowledge/reranker');

async function runRerankerTests() {
  console.log('=== RUNNING RERANKER ENGINE UNIT TESTS ===');

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

  const res = reranker.rerank([
    { chunk: { content: 'Generic document' }, similarityScore: 0.8 },
    { chunk: { content: 'Udyam Aadhaar verification failure' }, similarityScore: 0.75 }
  ], 'Udyam Aadhaar');

  assert(res[0].chunk.content.includes('Udyam'), 'Boosts rerank score for entity overlap matching query intent');

  console.log(`\nReranker Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRerankerTests().catch(err => {
  console.error('Reranker Test Error:', err);
  process.exit(1);
});
