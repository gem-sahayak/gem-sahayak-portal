'use strict';

const heartbeat = require('../supervisor/heartbeat');

async function runHeartbeatTests() {
  console.log('=== RUNNING HEARTBEAT MONITOR UNIT TESTS ===');

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

  heartbeat.ping('agent-hb-1');
  assert(typeof heartbeat.getLastHeartbeat('agent-hb-1') === 'number', 'Records agent heartbeat timestamp');

  console.log(`\nHeartbeat Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runHeartbeatTests().catch(err => {
  console.error('Heartbeat Test Error:', err);
  process.exit(1);
});
