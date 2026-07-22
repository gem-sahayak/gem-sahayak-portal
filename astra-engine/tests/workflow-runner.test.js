'use strict';

const workflowRunner = require('../workflow/workflowRunner');

async function runWorkflowRunnerTests() {
  console.log('=== RUNNING WORKFLOW RUNNER UNIT TESTS ===');

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

  const res = await workflowRunner.runWorkflow({ id: 'wf-test', steps: ['step1', 'step2'] });
  assert(res.status === 'COMPLETED', 'Executes workflow steps to completion');
  assert(res.stepResults.length === 2, 'Records step execution results');

  console.log(`\nWorkflow Runner Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runWorkflowRunnerTests().catch(err => {
  console.error('Workflow Runner Test Error:', err);
  process.exit(1);
});
