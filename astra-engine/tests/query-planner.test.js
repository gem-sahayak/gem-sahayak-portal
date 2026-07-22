'use strict';

const queryPlanner = require('../engines/knowledge/queryPlanner');

async function runQueryPlannerTests() {
  console.log('=== RUNNING QUERY PLANNER UNIT TESTS ===');

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

  const res = queryPlanner.planQuery('How to claim EMD exemption?');
  assert(res.questionType === 'Procedural', 'Detects Procedural question intent');

  console.log(`\nQuery Planner Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runQueryPlannerTests().catch(err => {
  console.error('Query Planner Test Error:', err);
  process.exit(1);
});
