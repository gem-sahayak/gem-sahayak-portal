'use strict';

/**
 * Citation Engine.
 * Generates structured citations for Article, Heading, Chunk, Source, Hub, FAQ, and Tool.
 */
class CitationEngine {
  formatCitations(citationsList = []) {
    return citationsList.map(c => ({
      citationId: c.citationId,
      referenceText: `[${c.title}] (${c.url})`,
      chunkId: c.chunkId
    }));
  }
}

module.exports = new CitationEngine();
