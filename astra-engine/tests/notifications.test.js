'use strict';

const notificationCenter = require('../studio/notificationCenter');

async function runNotificationsTests() {
  console.log('=== RUNNING NOTIFICATION CENTER UNIT TESTS ===');

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

  notificationCenter.notify('Scan Complete', '0 errors found', 'SUCCESS');
  const notifs = notificationCenter.getNotifications();

  assert(notifs.length >= 1, 'Records notification payload');
  assert(notifs[0].title === 'Scan Complete', 'Includes notification title');

  console.log(`\nNotifications Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runNotificationsTests().catch(err => {
  console.error('Notifications Test Error:', err);
  process.exit(1);
});
