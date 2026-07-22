'use strict';

const BaseAiAdapter = require('./baseAdapter');

/**
 * Mock AI Provider Adapter.
 * Returns deterministic semantic reviews for testability, zero network calls,
 * and high-speed offline execution (<2s for 100 articles).
 */
class MockAiAdapter extends BaseAiAdapter {
  constructor() {
    super('mock-ai-adapter');
  }

  async review(article) {
    const title = article.title || '';
    const summary = article.summary || '';
    const slug = article.slug || 'unknown';

    // Deterministic scoring based on content completeness heuristics
    const hasRefundWord = title.toLowerCase().includes('emd') || summary.toLowerCase().includes('emd');
    const isUdyam = slug.includes('udyam');

    const intentScore = hasRefundWord ? 96 : 90;
    const eeatScore = isUdyam ? 95 : 91;
    const completenessScore = hasRefundWord ? 88 : 94; // Triggers recommendation if lower

    return {
      slug,
      intentScore,
      eeatScore,
      completenessScore,
      authorityScore: 93,
      readabilityScore: 90,
      seoScore: 92,
      entityScore: 95,
      linkScore: 89,
      freshnessScore: 94,
      missingTopics: hasRefundWord ? ['Refund Timeline', 'Estimated Processing Time', 'Documents Required'] : [],
      suggestedHeading: hasRefundWord ? 'EMD Refund Timeline & Claim Process' : null,
      confidence: 0.94
    };
  }
}

module.exports = MockAiAdapter;
