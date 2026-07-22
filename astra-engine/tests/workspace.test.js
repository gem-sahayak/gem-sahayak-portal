'use strict';

const workspaceState = require('../studio/workspaceState');

async function runWorkspaceTests() {
  console.log('=== RUNNING WORKSPACE STATE UNIT TESTS ===');

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

  workspaceState.setActiveTab('reports');
  const state = workspaceState.getState();

  assert(state.activeTab === 'reports', 'Updates active view tab');
  assert(state.openTabs.includes('reports'), 'Tracks open tabs list');

  console.log(`\nWorkspace Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runWorkspaceTests().catch(err => {
  console.error('Workspace Test Error:', err);
  process.exit(1);
});
