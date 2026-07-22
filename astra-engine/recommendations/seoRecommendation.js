'use strict';

class SeoRecommendationModel {
  generate(state = {}) {
    return [
      {
        id: 'rec-seo-1',
        category: 'SEO',
        title: 'Fix Keyword Cannibalization in Bidding Cluster',
        impact: 'HIGH',
        confidence: 0.95,
        target: 'gem-bidding-mistakes-msme-tenders'
      }
    ];
  }
}

module.exports = new SeoRecommendationModel();
