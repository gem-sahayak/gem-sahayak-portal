'use strict';

const { EventBus, EVENT_TYPES } = require('../core/events/bus');

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

  const bus = new EventBus();
  let receivedPayload = null;

  // 1. Subscribe and Publish Test
  const unsub = bus.subscribe(EVENT_TYPES.SCAN_STARTED, (evt) => {
    receivedPayload = evt.payload;
  });

  bus.publish(EVENT_TYPES.SCAN_STARTED, { status: 'started' });

  assert(receivedPayload !== null, 'Subscriber receives published event');
  assert(receivedPayload.status === 'started', 'Event payload matches expected data');

  // 2. Unsubscribe Test
  unsub();
  receivedPayload = null;
  bus.publish(EVENT_TYPES.SCAN_STARTED, { status: 'again' });
  assert(receivedPayload === null, 'Unsubscribed listener does not receive events');

  // 3. Event History Test
  const history = bus.getHistory();
  assert(history.length === 2, 'EventBus records event history');
  assert(history[0].type === EVENT_TYPES.SCAN_STARTED, 'Event history records correct event type');

  console.log(`\nEventBus Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEventBusTests().catch(err => {
  console.error('EventBus Test Error:', err);
  process.exit(1);
});
