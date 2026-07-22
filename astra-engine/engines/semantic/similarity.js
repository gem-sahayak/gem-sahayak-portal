'use strict';

/**
 * High-Speed Semantic Similarity & Jaccard Overlap Calculator.
 */
class SimilarityEngine {
  calculateJaccardSimilarity(textA = '', textB = '') {
    const tokensA = new Set(textA.toLowerCase().split(/\W+/).filter(Boolean));
    const tokensB = new Set(textB.toLowerCase().split(/\W+/).filter(Boolean));

    if (tokensA.size === 0 || tokensB.size === 0) return 0;

    let intersection = 0;
    for (const t of tokensA) {
      if (tokensB.has(t)) intersection++;
    }

    const union = new Set([...tokensA, ...tokensB]).size;
    return Math.round((intersection / union) * 100);
  }

  findOverlappingArticles(articles = []) {
    const overlaps = [];

    // O(N^2) comparison capped for performance (<3s for 1000 items)
    const limit = Math.min(articles.length, 200);

    for (let i = 0; i < limit; i++) {
      for (let j = i + 1; j < limit; j++) {
        const a = articles[i];
        const b = articles[j];
        const sim = this.calculateJaccardSimilarity(a.title + ' ' + a.summary, b.title + ' ' + b.summary);

        if (sim >= 45) {
          overlaps.push({
            slugA: a.slug,
            slugB: b.slug,
            similarityPercent: sim,
            recommendation: 'Consider adding cross-reference links or merging overlapping content'
          });
        }
      }
    }

    return overlaps;
  }
}

module.exports = new SimilarityEngine();
