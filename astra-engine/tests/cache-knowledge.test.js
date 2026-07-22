'use strict';

const cacheManager = require('../engines/knowledge/cacheManager');

async function runCacheKnowledgeTests() {
  console.log('=== RUNNING KNOWLEDGE CACHE MANAGER UNIT TESTS ===');

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

  cacheManager.set('key-1', { data: 'test' });
  const val = cacheManager.get('key-1');
  const stats = cacheManager.getStats();

  assert(val.data === 'test', 'Retrieves cached item');
  assert(stats.hits === 1, 'Records cache hit telemetry');

  console.log(`\nKnowledge Cache Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCacheKnowledgeTests().catch(err => {
  console.error('Knowledge Cache Test Error:', err);
  process.exit(1);
});
