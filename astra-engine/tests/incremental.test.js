'use strict';

const incrementalComparer = require('../core/incremental/comparer');

async function runIncrementalTests() {
  console.log('=== RUNNING INCREMENTAL SCANNER UNIT TESTS ===');

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

  const mockDb = {
    entries: new Map([
      ['file1.md', { hash: 'hash_file1', mtime: 100 }],
      ['file2.md', { hash: 'hash_file2', mtime: 100 }]
    ])
  };

  const mockDisk = new Map([
    ['file1.md', { absolutePath: 'mock/path1', size: 10 }], // unchanged/mod
    ['file3.md', { absolutePath: 'mock/path3', size: 20 }]  // added
  ]);

  const res = incrementalComparer.compare(mockDisk, mockDb);

  assert(res.added.includes('file3.md'), 'Detects newly added files');
  assert(res.deleted.includes('file2.md'), 'Detects deleted files from database');
  assert(res.stats.totalFiles === 2, 'Accurately tracks total disk files count');
  assert(res.stats.addedCount === 1, 'Accurately counts added files');
  assert(res.stats.deletedCount === 1, 'Accurately counts deleted files');

  console.log(`\nIncremental Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runIncrementalTests().catch(err => {
  console.error('Incremental Test Error:', err);
  process.exit(1);
});
