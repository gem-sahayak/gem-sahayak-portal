'use strict';

/**
 * Document Indexer.
 * Extracts structured documents from registry, categories, tools, FAQs, and reports.
 */
class DocumentIndexer {
  extractDocuments(state) {
    const docs = [];
    const articles = state.parsedRegistry?.articles || [];
    const categories = state.parsedRegistry?.categories || [];

    for (const a of articles) {
      docs.push({
        id: `doc-art-${a.slug}`,
        sourceType: 'ARTICLE',
        title: a.title || a.slug,
        slug: a.slug,
        category: a.category,
        content: `${a.title || ''}. ${a.summary || ''}`
      });
    }

    for (const cat of categories) {
      const catSlug = typeof cat === 'string' ? cat : cat.slug;
      docs.push({
        id: `doc-hub-${catSlug}`,
        sourceType: 'HUB',
        title: `${catSlug} Hub`,
        slug: catSlug,
        content: `Knowledge Hub Category covering ${catSlug} guidelines`
      });
    }

    return docs;
  }
}

module.exports = new DocumentIndexer();
