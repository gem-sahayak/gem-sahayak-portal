'use strict';

/**
 * Knowledge Completeness & Topic Coverage Evaluator.
 */
class CoverageEvaluator {
  evaluateCoverage(articles = [], entityReport = {}) {
    const totalArticles = articles.length;
    const coveredEntities = entityReport.covered ? entityReport.covered.length : 0;
    const totalEntities = entityReport.totalEntitiesDetected || 1;

    const topicCoveragePercent = Math.round((coveredEntities / totalEntities) * 100);

    return {
      totalArticles,
      topicCoveragePercent,
      missingTopics: ['GeM Incident Management & Account Suspension Reply', 'CPPP Tender Search & Dual Portal Mapping']
    };
  }
}

module.exports = new CoverageEvaluator();
