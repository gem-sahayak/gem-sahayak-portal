'use strict';

const { messageBus } = require('../communication');

async function runCommunicationTests() {
  console.log('=== RUNNING COMMUNICATION ENGINE UNIT TESTS ===');

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

  const res = messageBus.publish({ sender: 'agent-1', payload: 'Hello Mesh' });
  assert(res.published === true, 'Publishes valid agent message to message bus');

  console.log(`\nCommunication Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCommunicationTests().catch(err => {
  console.error('Communication Test Error:', err);
  process.exit(1);
});
