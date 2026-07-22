'use strict';

/**
 * Optimization Recommendation Aggregator.
 */
class RecommendationAggregator {
  aggregate(optimizerResults = [], linkRecs = [], entityRecs = []) {
    const suggestions = [];

    for (const opt of optimizerResults) {
      for (const el of opt.missingElements || []) {
        suggestions.push({
          articleSlug: opt.slug,
          type: 'MISSING_STRUCTURE',
          description: `Add missing element: ${el}`,
          priority: 'HIGH',
          confidence: 0.94,
          estimatedSeoImpact: 'HIGH',
          difficulty: 'EASY'
        });
      }
    }

    for (const link of linkRecs) {
      suggestions.push({
        articleSlug: link.sourceSlug,
        type: 'INTERNAL_LINK',
        description: `Add ${link.linkType} link to ${link.targetSlug} using anchor "${link.anchorSuggestion}"`,
        priority: link.estimatedSeoImpact === 'HIGH' ? 'HIGH' : 'MEDIUM',
        confidence: 0.92,
        estimatedSeoImpact: link.estimatedSeoImpact,
        difficulty: 'EASY'
      });
    }

    return suggestions;
  }
}

module.exports = new RecommendationAggregator();
