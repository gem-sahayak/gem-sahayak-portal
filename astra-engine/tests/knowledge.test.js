'use strict';

const { knowledgeEngine } = require('../engines/knowledge');

async function runKnowledgeTests() {
  console.log('=== RUNNING KNOWLEDGE ENGINE BASIC UNIT TESTS ===');

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

  assert(knowledgeEngine.manifest.name === 'Enterprise Knowledge Intelligence Platform', 'Engine returns correct manifest name');
  assert(knowledgeEngine.manifest.version === '1.6.0', 'Engine returns version 1.6.0');

  console.log(`\nKnowledge Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runKnowledgeTests().catch(err => {
  console.error('Knowledge Test Error:', err);
  process.exit(1);
});
