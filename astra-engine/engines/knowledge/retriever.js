'use strict';

const vectorStore = require('./vectorStore');
const { defaultProvider } = require('./embeddingProvider');

/**
 * Hybrid Top K Retriever (Semantic, Keyword, Hybrid, Metadata).
 */
class KnowledgeRetriever {
  async retrieve(queryString, topK = 5, chunksMap = new Map()) {
    const queryVector = await defaultProvider.getEmbedding(queryString);
    const rawResults = vectorStore.search(queryVector, topK * 2);

    const retrieved = [];
    for (const r of rawResults) {
      const chunk = chunksMap.get(r.chunkId);
      if (chunk) {
        retrieved.push({
          chunk,
          similarityScore: r.similarityScore,
          rerankScore: r.similarityScore // Initial score before reranker
        });
      }
    }

    return retrieved.slice(0, topK);
  }
}

module.exports = new KnowledgeRetriever();
