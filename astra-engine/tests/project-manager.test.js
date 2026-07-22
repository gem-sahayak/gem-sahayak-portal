'use strict';

const projectManager = require('../studio/projectManager');

async function runProjectManagerTests() {
  console.log('=== RUNNING PROJECT MANAGER UNIT TESTS ===');

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

  const proj = projectManager.openProject('/workspace/demo', 'Demo');
  assert(proj.name === 'Demo', 'Opens project with name Demo');
  assert(projectManager.getActiveProject().path === '/workspace/demo', 'Returns active project details');

  console.log(`\nProject Manager Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runProjectManagerTests().catch(err => {
  console.error('Project Manager Test Error:', err);
  process.exit(1);
});
