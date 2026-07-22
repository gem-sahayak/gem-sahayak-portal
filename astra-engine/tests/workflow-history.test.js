'use strict';

const workflowHistory = require('../workflow/workflowHistory');

async function runWorkflowHistoryTests() {
  console.log('=== RUNNING WORKFLOW HISTORY UNIT TESTS ===');

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

  workflowHistory.recordExecution('wf-1', 'COMPLETED', 15);
  const hist = workflowHistory.getHistory();
  assert(hist.length >= 1, 'Records workflow execution in history log');

  console.log(`\nWorkflow History Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runWorkflowHistoryTests().catch(err => {
  console.error('Workflow History Test Error:', err);
  process.exit(1);
});
