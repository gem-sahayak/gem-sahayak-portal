'use strict';

const auditTrail = require('../explainability/auditTrail');

async function runAuditTests() {
  console.log('=== RUNNING AUDIT TRAIL UNIT TESTS ===');

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

  auditTrail.recordAudit('Test Audit Action');
  const trail = auditTrail.getTrail();
  assert(trail.length >= 1, 'Records decision audit trail log');

  console.log(`\nAudit Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runAuditTests().catch(err => {
  console.error('Audit Test Error:', err);
  process.exit(1);
});
