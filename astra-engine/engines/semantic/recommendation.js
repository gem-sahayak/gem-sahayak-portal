'use strict';

/**
 * Semantic Recommendation Generator.
 * Formats top priority SEO improvements, cannibalization fixes, and link suggestions.
 */
class SemanticRecommendationEngine {
  generateRecommendations(cannibalizations = [], overlaps = [], entityReport = {}) {
    const recommendations = [];

    for (const c of cannibalizations) {
      recommendations.push({
        type: 'CANNIBALIZATION_FIX',
        priority: 'P1',
        articleSlug: c.winnerSlug,
        competingSlug: c.competingSlugs[0],
        message: `Keyword cannibalization detected on "${c.targetKeyword}"`,
        recommendation: c.recommendation,
        confidence: c.confidence
      });
    }

    for (const o of overlaps) {
      recommendations.push({
        type: 'SIMILARITY_MERGE',
        priority: 'P2',
        articleSlug: o.slugA,
        competingSlug: o.slugB,
        message: `High semantic similarity (${o.similarityPercent}%) between ${o.slugA} and ${o.slugB}`,
        recommendation: o.recommendation,
        confidence: 0.88
      });
    }

    if (entityReport.missing && entityReport.missing.length > 0) {
      recommendations.push({
        type: 'MISSING_ENTITY_EXPANSION',
        priority: 'P2',
        articleSlug: 'global-knowledge-graph',
        message: `Missing coverage for essential entities: ${entityReport.missing.map(e => e.name).join(', ')}`,
        recommendation: 'Publish target articles covering missing entities to boost Topical Authority',
        confidence: 0.95
      });
    }

    return recommendations;
  }
}

module.exports = new SemanticRecommendationEngine();
