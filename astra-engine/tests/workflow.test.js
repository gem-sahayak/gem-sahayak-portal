'use strict';

const { workflowEngine } = require('../workflow');

async function runWorkflowTests() {
  console.log('=== RUNNING WORKFLOW ENGINE BASIC UNIT TESTS ===');

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

  assert(workflowEngine.manifest.name === 'Enterprise Autonomous Workflow Intelligence Engine', 'Workflow engine returns correct manifest name');
  assert(workflowEngine.manifest.version === '1.9.0', 'Workflow engine returns version 1.9.0');

  console.log(`\nWorkflow Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runWorkflowTests().catch(err => {
  console.error('Workflow Test Error:', err);
  process.exit(1);
});
