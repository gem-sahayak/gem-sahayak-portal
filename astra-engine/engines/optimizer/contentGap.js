'use strict';

/**
 * Content Gap & Coverage Engine.
 */
class ContentGapEngine {
  calculateGaps(article) {
    const summary = article.summary || '';
    const gapPercent = summary.length < 100 ? 30 : 10;
    const coveragePercent = 100 - gapPercent;

    return {
      articleSlug: article.slug,
      coveragePercent,
      gapPercent,
      priority: gapPercent >= 20 ? 'HIGH' : 'LOW'
    };
  }
}

module.exports = new ContentGapEngine();
