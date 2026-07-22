'use strict';

const similarityEngine = require('../engines/semantic/similarity');

async function runSimilarityTests() {
  console.log('=== RUNNING SEMANTIC SIMILARITY UNIT TESTS ===');

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

  const sim = similarityEngine.calculateJaccardSimilarity('GeM Portal Udyam Aadhaar Verification Failure', 'GeM Portal Udyam Registration Exemption Rules');
  assert(sim >= 30, 'Calculates non-zero Jaccard semantic similarity percentage');

  console.log(`\nSimilarity Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSimilarityTests().catch(err => {
  console.error('Similarity Test Error:', err);
  process.exit(1);
});
