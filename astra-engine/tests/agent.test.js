'use strict';

const { agentEngine, agentManager } = require('../agents');

async function runAgentTests() {
  console.log('=== RUNNING AGENT ENGINE BASIC UNIT TESTS ===');

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

  assert(agentEngine.manifest.name === 'Enterprise Multi-Agent Intelligence Mesh Engine', 'Agent engine returns correct manifest name');
  assert(agentEngine.manifest.version === '1.12.0', 'Agent engine returns version 1.12.0');

  const ag = agentManager.createAgent('test-agent-1', 'Test Agent', 'TEST');
  assert(ag.lifecycle.getState() === 'INITIALIZED', 'Initializes agent lifecycle');
  assert(ag.start() === 'ACTIVE', 'Transitions agent lifecycle to active');

  console.log(`\nAgent Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runAgentTests().catch(err => {
  console.error('Agent Test Error:', err);
  process.exit(1);
});
