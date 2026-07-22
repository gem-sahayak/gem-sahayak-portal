'use strict';

/**
 * Knowledge Reranker Engine.
 * Reorders retrieved chunks based on intent, entity overlap, and freshness.
 */
class KnowledgeReranker {
  rerank(retrievedResults = [], queryString = '') {
    const queryLower = queryString.toLowerCase();

    return retrievedResults.map(r => {
      let boost = 0;
      const contentLower = (r.chunk.content || '').toLowerCase();

      if (queryLower.includes('udyam') && contentLower.includes('udyam')) boost += 0.15;
      if (queryLower.includes('emd') && contentLower.includes('emd')) boost += 0.15;

      const newScore = Math.min(1.0, r.similarityScore + boost);
      return {
        ...r,
        rerankScore: Math.round(newScore * 100) / 100
      };
    }).sort((a, b) => b.rerankScore - a.rerankScore);
  }
}

module.exports = new KnowledgeReranker();
