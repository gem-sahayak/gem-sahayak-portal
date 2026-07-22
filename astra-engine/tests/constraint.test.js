'use strict';

const constraintEngine = require('../reasoning/constraintEngine');

async function runConstraintTests() {
  console.log('=== RUNNING CONSTRAINT ENGINE UNIT TESTS ===');

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

  const list = constraintEngine.evaluateConstraints();
  assert(list.length >= 2, 'Evaluates system constraints');
  assert(list.every(c => c.satisfied), 'Confirms all system constraints satisfied');

  console.log(`\nConstraint Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runConstraintTests().catch(err => {
  console.error('Constraint Test Error:', err);
  process.exit(1);
});
