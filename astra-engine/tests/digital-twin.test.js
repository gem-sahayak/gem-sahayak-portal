'use strict';

const { twinRegistry } = require('../digitalTwin');

async function runDigitalTwinTests() {
  console.log('=== RUNNING DIGITAL TWIN UNIT TESTS ===');

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

  const masterTwin = twinRegistry.generateMasterTwin({});
  assert(masterTwin.project.type === 'PROJECT_TWIN', 'Generates project digital twin mirror');
  assert(masterTwin.workflow.type === 'WORKFLOW_TWIN', 'Generates workflow digital twin mirror');

  console.log(`\nDigital Twin Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDigitalTwinTests().catch(err => {
  console.error('Digital Twin Test Error:', err);
  process.exit(1);
});
