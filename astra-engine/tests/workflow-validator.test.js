'use strict';

const workflowValidator = require('../workflow/workflowValidator');

async function runWorkflowValidatorTests() {
  console.log('=== RUNNING WORKFLOW VALIDATOR UNIT TESTS ===');

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

  const res1 = workflowValidator.validate({ id: 'wf-1', steps: [] });
  assert(res1.valid === true, 'Validates well-formed workflow schema');

  const res2 = workflowValidator.validate({ steps: 'invalid' });
  assert(res2.valid === false, 'Rejects invalid workflow schema');

  console.log(`\nWorkflow Validator Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runWorkflowValidatorTests().catch(err => {
  console.error('Workflow Validator Test Error:', err);
  process.exit(1);
});
