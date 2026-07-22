'use strict';

class ReviewReasoningEngine {
  analyzeSemanticGaps(article, reviewResult) {
    const gaps = [];

    if (reviewResult.missingTopics && reviewResult.missingTopics.length > 0) {
      gaps.push({
        type: 'MISSING_TOPIC_GAP',
        articleSlug: article.slug,
        topics: reviewResult.missingTopics,
        reason: `Article title/summary promises "${article.title}" but lacks detailed explanation of ${reviewResult.missingTopics.join(', ')}`,
        impact: 'HIGH',
        confidence: reviewResult.confidence || 0.94
      });
    }

    if (reviewResult.completenessScore < 90) {
      gaps.push({
        type: 'COMPLETENESS_GAP',
        articleSlug: article.slug,
        reason: 'Content depth is thin compared to search intent expectation',
        impact: 'MEDIUM',
        confidence: 0.90
      });
    }

    return gaps;
  }
}

module.exports = new ReviewReasoningEngine();
