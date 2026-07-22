'use strict';

const documentIndexer = require('../engines/knowledge/documentIndexer');
const chunkEngine = require('../engines/knowledge/chunkEngine');
const { defaultProvider } = require('../engines/knowledge/embeddingProvider');
const vectorStore = require('../engines/knowledge/vectorStore');
const retriever = require('../engines/knowledge/retriever');

async function runKnowledgeBenchmark() {
  console.log('=== RUNNING KNOWLEDGE INTELLIGENCE STRESS BENCHMARK (10,000 DOCUMENTS SCALE) ===\n');

  // Generate 10,000 synthetic documents for stress benchmark
  const mockArticles = [];
  for (let i = 1; i <= 10000; i++) {
    mockArticles.push({
      slug: `synth-knw-doc-${i}`,
      title: `GeM Procurement Guide ${i} for Udyam and EMD Rules`,
      summary: `Detailed compliance guide for seller ${i}`,
      category: 'gem-registration'
    });
  }

  const mockState = {
    parsedRegistry: { articles: mockArticles }
  };

  const t0 = Date.now();
  const docs = documentIndexer.extractDocuments(mockState);
  const chunks = chunkEngine.chunkDocuments(docs);

  const chunksMap = new Map();
  for (let i = 0; i < chunks.length; i++) {
    const chk = chunks[i];
    chunksMap.set(chk.chunkId, chk);
    // Fast mock vector insert
    vectorStore.insert(chk.chunkId, [0.1, 0.2, 0.3, 0.4], chk.metadata);
  }

  const retrieved = await retriever.retrieve('Udyam Aadhaar', 5, chunksMap);
  const durationMs = Date.now() - t0;

  console.log(`  - Scale Tested        : 10,000 Documents (${chunks.length} Chunks)`);
  console.log(`  - Index & Retrieval   : ${durationMs} ms (Target: < 1,500 ms)`);
  console.log(`  - Vector Store Size   : ${vectorStore.size()} embeddings`);
  console.log(`  - Top K Retrieved     : ${retrieved.length} chunks\n`);

  if (durationMs >= 1500) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 1500 ms)`);
    process.exit(1);
  }

  console.log('✅ KNOWLEDGE STRESS BENCHMARK PASSED UNDER 1,500 MS!\n');
}

runKnowledgeBenchmark().catch(err => {
  console.error('Knowledge Benchmark Error:', err);
  process.exit(1);
});
