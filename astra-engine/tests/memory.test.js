'use strict';

const memorySystem = require('../memory');

async function runMemoryTests() {
  console.log('=== RUNNING MEMORY SYSTEM UNIT TESTS ===');

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

  memorySystem.workingMemory.set('test-key', 'test-val');
  assert(memorySystem.workingMemory.get('test-key') === 'test-val', 'Stores and retrieves item in working memory');

  console.log(`\nMemory Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runMemoryTests().catch(err => {
  console.error('Memory Test Error:', err);
  process.exit(1);
});
