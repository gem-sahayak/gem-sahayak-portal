'use strict';

const priorityEngine = require('../decision/priorityEngine');

async function runPriorityTests() {
  console.log('=== RUNNING PRIORITY ENGINE UNIT TESTS ===');

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

  const p1 = priorityEngine.calculatePriority('HIGH', 'EASY');
  assert(p1 === 'CRITICAL', 'Calculates CRITICAL priority for high impact easy tasks');

  const p2 = priorityEngine.calculatePriority('MEDIUM', 'HARD');
  assert(p2 === 'MEDIUM', 'Calculates MEDIUM priority tier');

  console.log(`\nPriority Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPriorityTests().catch(err => {
  console.error('Priority Engine Test Error:', err);
  process.exit(1);
});
