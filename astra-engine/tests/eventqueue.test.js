'use strict';

const eventQueue = require('../events/eventQueue');

async function runEventQueueTests() {
  console.log('=== RUNNING EVENT QUEUE UNIT TESTS ===');

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

  eventQueue.enqueue({ type: 'EVT-1' });
  assert(eventQueue.size() >= 1, 'Enqueues event items in memory buffer');

  const dequeued = eventQueue.dequeue();
  assert(dequeued.type === 'EVT-1', 'Dequeues event items in FIFO order');

  console.log(`\nEvent Queue Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runEventQueueTests().catch(err => {
  console.error('Event Queue Test Error:', err);
  process.exit(1);
});
