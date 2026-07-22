'use strict';

const MemoryCache = require('../core/cache/memoryCache');
const SnapshotCacheManager = require('../core/cache/snapshotCache');

async function runCacheTests() {
  console.log('=== RUNNING CACHE LAYER UNIT TESTS ===');

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

  // 1. MemoryCache Set/Get/Hit/Miss Test
  const mem = new MemoryCache(1000);
  mem.set('key1', 'val1');

  assert(mem.get('key1') === 'val1', 'Cache returns stored value');
  assert(mem.get('key2') === null, 'Cache returns null for missing key');

  const stats = mem.getStats();
  assert(stats.hits === 1, 'Cache tracks hit count');
  assert(stats.misses === 1, 'Cache tracks miss count');
  assert(stats.hitRatePct === 50, 'Cache calculates 50% hit rate');

  // 2. SnapshotCacheManager Test
  const snap = new SnapshotCacheManager();
  snap.cacheStateSnapshot('hash123', { snap: 'ok' });
  assert(snap.getStateSnapshot('hash123').snap === 'ok', 'SnapshotCacheManager caches state snapshots');

  console.log(`\nCache Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCacheTests().catch(err => {
  console.error('Cache Test Error:', err);
  process.exit(1);
});
