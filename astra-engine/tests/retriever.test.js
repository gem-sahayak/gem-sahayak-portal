'use strict';

const retriever = require('../engines/knowledge/retriever');
const vectorStore = require('../engines/knowledge/vectorStore');

async function runRetrieverTests() {
  console.log('=== RUNNING HYBRID RETRIEVER UNIT TESTS ===');

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

  const map = new Map();
  map.set('chk-ret-1', { chunkId: 'chk-ret-1', content: 'Udyam Aadhaar guide', metadata: { title: 'Udyam' } });
  vectorStore.insert('chk-ret-1', [0.5, 0.5, 0.5], { title: 'Udyam' });

  const res = await retriever.retrieve('Udyam Aadhaar', 1, map);
  assert(res.length === 1, 'Retrieves top K matched knowledge chunks');

  console.log(`\nRetriever Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRetrieverTests().catch(err => {
  console.error('Retriever Test Error:', err);
  process.exit(1);
});
