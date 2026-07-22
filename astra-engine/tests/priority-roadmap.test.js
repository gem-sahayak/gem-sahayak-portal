'use strict';

const priorityPlannerEngine = require('../engines/optimizer/priorityPlanner');

async function runPriorityRoadmapTests() {
  console.log('=== RUNNING PRIORITY ROADMAP PLANNER UNIT TESTS ===');

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

  const res = priorityPlannerEngine.buildRoadmap([
    { articleSlug: 'udyam-error', description: 'Fix critical gap', priority: 'CRITICAL', estimatedSeoImpact: 'HIGH', difficulty: 'EASY' }
  ]);

  assert(res.summary.criticalCount === 1, 'Counts critical priority roadmap actions');

  console.log(`\nPriority Roadmap Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPriorityRoadmapTests().catch(err => {
  console.error('Priority Roadmap Test Error:', err);
  process.exit(1);
});
