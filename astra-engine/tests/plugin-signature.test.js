'use strict';

const signatureVerifier = require('../core/plugins/signature');

async function runSignatureTests() {
  console.log('=== RUNNING PLUGIN SIGNATURE VERIFICATION UNIT TESTS ===');

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

  // 1. Checksum verification
  const checkPass = signatureVerifier.verifyChecksum(__filename, null);
  assert(checkPass === true, 'Bypasses verification when expected checksum is omitted');

  // 2. Missing signature handling
  const sigRes = signatureVerifier.verifySignature(__dirname);
  assert(sigRes.verified === false, 'Handles missing signature.sig / publisher.pem safely without crashing');

  console.log(`\nSignature Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSignatureTests().catch(err => {
  console.error('Signature Test Error:', err);
  process.exit(1);
});
