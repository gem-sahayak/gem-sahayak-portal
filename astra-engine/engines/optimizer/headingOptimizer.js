'use strict';

/**
 * Heading Hierarchy & Structural Optimizer.
 */
class HeadingOptimizerEngine {
  evaluateHeadings(article) {
    const title = article.title || '';
    const length = title.length;

    const issues = [];
    if (length < 30) {
      issues.push({
        type: 'SHORT_TITLE',
        message: 'Article title is under 30 characters',
        recommendation: 'Expand title to include targeted long-tail keywords (50-60 chars)'
      });
    }

    if (!title.toLowerCase().includes('gem')) {
      issues.push({
        type: 'MISSING_BRAND_KEYWORD',
        message: 'Title lacks "GeM Portal" primary keyword',
        recommendation: 'Include "GeM Portal" in title for search intent alignment'
      });
    }

    return {
      articleSlug: article.slug,
      titleLength: length,
      headingScore: issues.length === 0 ? 100 : 80,
      issues
    };
  }
}

module.exports = new HeadingOptimizerEngine();
