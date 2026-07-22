'use strict';

/**
 * Offline Deterministic Vector Store.
 * Supports Insert, Delete, Search, Similarity, Metadata & Namespace filtering.
 */
class VectorStore {
  constructor() {
    this.vectors = new Map();
  }

  insert(chunkId, vector, metadata = {}, namespace = 'default') {
    this.vectors.set(chunkId, { vector, metadata, namespace });
  }

  delete(chunkId) {
    this.vectors.delete(chunkId);
  }

  cosineSimilarity(vecA, vecB) {
    let dot = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < Math.min(vecA.length, vecB.length); i++) {
      dot += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    return (normA === 0 || normB === 0) ? 0 : dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  search(queryVector, topK = 5, namespaceFilter = null) {
    const results = [];

    for (const [id, record] of this.vectors.entries()) {
      if (namespaceFilter && record.namespace !== namespaceFilter) continue;

      const sim = this.cosineSimilarity(queryVector, record.vector);
      results.push({
        chunkId: id,
        similarityScore: Math.round(sim * 100) / 100,
        metadata: record.metadata
      });
    }

    results.sort((a, b) => b.similarityScore - a.similarityScore);
    return results.slice(0, topK);
  }

  size() {
    return this.vectors.size;
  }
}

module.exports = new VectorStore();
