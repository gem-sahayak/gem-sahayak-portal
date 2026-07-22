'use strict';

const executionReplay = require('../simulation/executionReplay');

async function runReplayTests() {
  console.log('=== RUNNING REPLAY ENGINE UNIT TESTS ===');

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

  const res = executionReplay.replayTimeline([{ name: 'Test Evt' }]);
  assert(res.length === 1, 'Replays timeline events');
  assert(res[0].verdict === 'REPLAY_MATCH', 'Replay events match original execution');

  console.log(`\nReplay Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReplayTests().catch(err => {
  console.error('Replay Test Error:', err);
  process.exit(1);
});
