'use strict';

const { supervisorEngine } = require('../supervisor');

async function runSupervisorTests() {
  console.log('=== RUNNING SUPERVISOR ENGINE UNIT TESTS ===');

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

  const res = supervisorEngine.runSupervision([{ id: 'agent-1' }]);
  assert(res.health.overallHealth === 'HEALTHY', 'Reports healthy status across active agent mesh');

  console.log(`\nSupervisor Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSupervisorTests().catch(err => {
  console.error('Supervisor Test Error:', err);
  process.exit(1);
});
