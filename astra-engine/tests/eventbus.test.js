'use strict';

const { eventBus } = require('../events');

async function runEventBusTests() {
  console.log('=== RUNNING EVENT BUS UNIT TESTS ===');

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

  let received = false;
  eventBus.subscribe('TEST_EVENT', payload => {
    received = payload.ok;
  });

  eventBus.publish('TEST_EVENT', { ok: true });

  assert(received === true, 'Publishes events and delivers to subscribed listeners');

  console.log(`\nEvent Bus Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEventBusTests().catch(err => {
  console.error('Event Bus Test Error:', err);
  process.exit(1);
});
