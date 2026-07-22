'use strict';

class ReviewRecommendationEngine {
  generateRecommendations(gapsList = []) {
    const recommendations = [];

    for (const gap of gapsList) {
      if (gap.type === 'MISSING_TOPIC_GAP') {
        recommendations.push({
          articleSlug: gap.articleSlug,
          missingTopics: gap.topics,
          suggestedHeading: `Add Section: ${gap.topics[0]}`,
          reason: gap.reason,
          impact: gap.impact,
          confidence: gap.confidence,
          priority: 'P2'
        });
      } else if (gap.type === 'COMPLETENESS_GAP') {
        recommendations.push({
          articleSlug: gap.articleSlug,
          missingTopics: ['In-depth examples', 'Step-by-step workflow'],
          suggestedHeading: 'Expand Article Completeness & Step-by-Step Flow',
          reason: gap.reason,
          impact: gap.impact,
          confidence: gap.confidence,
          priority: 'P2'
        });
      }
    }

    return recommendations;
  }
}

module.exports = new ReviewRecommendationEngine();
