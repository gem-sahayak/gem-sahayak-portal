'use strict';

const chunkEngine = require('../engines/knowledge/chunkEngine');

async function runChunkTests() {
  console.log('=== RUNNING CHUNK ENGINE UNIT TESTS ===');

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

  const chunks = chunkEngine.chunkDocuments([
    { id: 'doc-1', sourceType: 'ARTICLE', title: 'Test Article', slug: 'test-art', content: 'Test content body' }
  ]);

  assert(chunks.length === 2, 'Splits document into 2 chunks (SEMANTIC & PARAGRAPH)');
  assert(chunks[0].chunkType === 'SEMANTIC', 'Includes SEMANTIC chunk type');

  console.log(`\nChunk Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runChunkTests().catch(err => {
  console.error('Chunk Test Error:', err);
  process.exit(1);
});
