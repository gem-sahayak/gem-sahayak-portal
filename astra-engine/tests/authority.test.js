'use strict';

const topicalAuthorityCalculator = require('../engines/semantic/topicalAuthority');

async function runAuthorityTests() {
  console.log('=== RUNNING TOPICAL AUTHORITY UNIT TESTS ===');

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

  const res = topicalAuthorityCalculator.calculateAuthority([{ topicalAuthorityScore: 94 }, { topicalAuthorityScore: 86 }]);
  assert(res.authorityPercent === 90, 'Averages topical authority across content clusters');

  console.log(`\nAuthority Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runAuthorityTests().catch(err => {
  console.error('Authority Test Error:', err);
  process.exit(1);
});
