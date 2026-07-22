'use strict';

const sharedPlanning = require('../collaboration/sharedPlanning');

async function runCollaborationTests() {
  console.log('=== RUNNING SHARED COLLABORATION UNIT TESTS ===');

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

  const plan = sharedPlanning.collaborativePlan();
  assert(plan.steps.length >= 3, 'Generates collaborative execution plan');

  console.log(`\nCollaboration Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCollaborationTests().catch(err => {
  console.error('Collaboration Test Error:', err);
  process.exit(1);
});
