'use strict';

/**
 * Context Window Builder.
 * Merges overlapping chunks, respects token budget, and formats citations.
 */
class ContextBuilder {
  buildContext(rerankedResults = [], maxTokenBudget = 2048) {
    const includedChunks = [];
    const citations = [];
    let currentTokenEstimate = 0;

    for (const r of rerankedResults) {
      const tokens = Math.ceil((r.chunk.content || '').length / 4);

      if (currentTokenEstimate + tokens > maxTokenBudget) break;

      includedChunks.push(r.chunk);
      currentTokenEstimate += tokens;

      citations.push({
        citationId: `cit-${r.chunk.chunkId}`,
        sourceSlug: r.chunk.metadata.slug || 'unknown',
        title: r.chunk.metadata.title || 'Untitled',
        sectionHeading: r.chunk.metadata.sectionHeading || 'Main',
        chunkId: r.chunk.chunkId,
        url: `https://sahayakai.co.in/guides/${r.chunk.metadata.slug}`
      });
    }

    return {
      totalTokensEstimate: currentTokenEstimate,
      maxTokenBudget,
      chunksIncluded: includedChunks,
      citations
    };
  }
}

module.exports = new ContextBuilder();
