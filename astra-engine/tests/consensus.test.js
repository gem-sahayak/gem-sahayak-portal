'use strict';

const { consensusEngine } = require('../collaboration');

async function runConsensusTests() {
  console.log('=== RUNNING CONSENSUS ENGINE UNIT TESTS ===');

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

  const res = consensusEngine.reachConsensus('Approval Topic', [{ agentId: 'a1', approve: true }]);
  assert(res.consensusReached === true, 'Reaches consensus on proposed topic');

  console.log(`\nConsensus Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runConsensusTests().catch(err => {
  console.error('Consensus Test Error:', err);
  process.exit(1);
});
