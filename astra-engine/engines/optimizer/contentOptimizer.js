'use strict';

/**
 * AI Content Optimizer.
 * Analyzes article completeness and recommends missing elements (sections, tables, CTAs, statistics).
 */
class ContentOptimizer {
  optimizeArticle(article) {
    const title = (article.title || '').toLowerCase();
    const summary = (article.summary || '').toLowerCase();

    const missingElements = [];
    if (!title.includes('guide') && !title.includes('rules')) missingElements.push('Step-by-Step Workflow Checklist');
    if (!summary.includes('udyam') && !summary.includes('emd')) missingElements.push('Key Document Checklist Table');
    if (!title.includes('2026')) missingElements.push('2026 Compliance Statistics & Slab Limits');

    return {
      slug: article.slug,
      missingElements,
      score: missingElements.length === 0 ? 100 : Math.max(70, 100 - (missingElements.length * 10)),
      recommendation: missingElements.length > 0 ? `Add ${missingElements.join(', ')} to boost user engagement` : 'Article structure is comprehensive'
    };
  }
}

module.exports = new ContentOptimizer();
