'use strict';

const { semanticEngine } = require('../engines/semantic');

async function runSemanticTests() {
  console.log('=== RUNNING SEMANTIC ENGINE BASIC UNIT TESTS ===');

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

  assert(semanticEngine.manifest.name === 'Semantic SEO Intelligence Engine', 'Engine returns correct manifest name');
  assert(semanticEngine.manifest.version === '1.5.1', 'Engine returns version 1.5.1');

  console.log(`\nSemantic Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSemanticTests().catch(err => {
  console.error('Semantic Test Error:', err);
  process.exit(1);
});
