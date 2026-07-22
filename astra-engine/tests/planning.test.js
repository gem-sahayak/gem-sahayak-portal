'use strict';

const { plannerEngine } = require('../planning');

async function runPlanningTests() {
  console.log('=== RUNNING PLANNING ENGINE UNIT TESTS ===');

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

  const plan = plannerEngine.createMasterPlan();
  assert(plan.goals.length >= 1, 'Generates master planning goals');
  assert(plan.milestones.length >= 1, 'Generates planning milestones');

  console.log(`\nPlanning Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPlanningTests().catch(err => {
  console.error('Planning Test Error:', err);
  process.exit(1);
});
