'use strict';

const contextBuilder = require('../engines/knowledge/contextBuilder');

async function runContextTests() {
  console.log('=== RUNNING CONTEXT WINDOW BUILDER UNIT TESTS ===');

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

  const res = contextBuilder.buildContext([
    { chunk: { chunkId: 'chk-1', content: 'Short test content', metadata: { slug: 'test-slug', title: 'Test' } } }
  ], 2048);

  assert(res.chunksIncluded.length === 1, 'Builds context window with included chunks');
  assert(res.citations.length === 1, 'Generates primary citations payload');

  console.log(`\nContext Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runContextTests().catch(err => {
  console.error('Context Test Error:', err);
  process.exit(1);
});
