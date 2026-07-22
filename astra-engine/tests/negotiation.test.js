'use strict';

const taskNegotiation = require('../collaboration/taskNegotiation');

async function runNegotiationTests() {
  console.log('=== RUNNING TASK NEGOTIATION UNIT TESTS ===');

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

  const res = taskNegotiation.negotiate('Audit Step', ['agent-seo']);
  assert(res.agreed === true, 'Negotiates and assigns task to agent');

  console.log(`\nNegotiation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runNegotiationTests().catch(err => {
  console.error('Negotiation Test Error:', err);
  process.exit(1);
});
