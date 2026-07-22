'use strict';

class ReviewRecommendationModel {
  generate(state = {}) {
    return [
      {
        id: 'rec-rev-1',
        category: 'REVIEW',
        title: 'Upgrade Author Credentials Metadata on GeM Direct Purchase',
        impact: 'MEDIUM',
        confidence: 0.90,
        target: 'gem-portal-direct-purchase-limit-rules-2026'
      }
    ];
  }
}

module.exports = new ReviewRecommendationModel();
