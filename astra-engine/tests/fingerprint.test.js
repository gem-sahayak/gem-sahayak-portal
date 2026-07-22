'use strict';

const fingerprintManager = require('../core/fingerprint');
const { calculateStringHash, calculateObjectHash } = require('../core/fingerprint/hash');

async function runFingerprintTests() {
  console.log('=== RUNNING FINGERPRINT DATABASE UNIT TESTS ===');

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

  // 1. Test Hash Utility
  const hash1 = calculateStringHash('test string 123');
  const hash2 = calculateStringHash('test string 123');
  const hashDiff = calculateStringHash('different string');

  assert(hash1 === hash2, 'Identical strings generate identical SHA256 hashes');
  assert(hash1 !== hashDiff, 'Different strings generate distinct SHA256 hashes');

  // 2. Object Hash Determinism
  const objHash1 = calculateObjectHash({ a: 1, b: 2 });
  const objHash2 = calculateObjectHash({ b: 2, a: 1 });
  assert(objHash1 === objHash2, 'Object key order does not alter object SHA256 hash');

  // 3. Fingerprint DB In-Memory Operations
  const db = fingerprintManager.getDatabase();
  db.set('test/file1.md', { hash: hash1, mtime: 1000, size: 50 });

  const record = db.get('test/file1.md');
  assert(record !== null, 'Fingerprint record correctly retrieved');
  assert(record.hash === hash1, 'Stored hash matches expected SHA256 hash');

  db.delete('test/file1.md');
  assert(db.get('test/file1.md') === null, 'Deleted fingerprint record removed');

  console.log(`\nFingerprint Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runFingerprintTests().catch(err => {
  console.error('Fingerprint Test Error:', err);
  process.exit(1);
});
