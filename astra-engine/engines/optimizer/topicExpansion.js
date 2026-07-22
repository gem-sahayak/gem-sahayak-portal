'use strict';

/**
 * Topic Expansion Engine.
 * Recommends new H2s, H3s, examples, comparisons, and workflows.
 */
class TopicExpansionEngine {
  generateTopicExpansions(article) {
    const title = (article.title || '').toLowerCase();
    const slug = article.slug || '';

    const suggestedH2 = [];
    const suggestedH3 = [];

    if (title.includes('udyam') || slug.includes('udyam')) {
      suggestedH2.push('Step-by-Step Udyam PAN Verification Workflow');
      suggestedH2.push('Common Udyam Profile Validation Errors & Solutions');
      suggestedH3.push('How to verify name match between PAN & Udyam certificate');
    } else if (title.includes('emd') || slug.includes('emd')) {
      suggestedH2.push('EMD Exemption Slabs & MSME Refund Timelines');
      suggestedH2.push('Difference Between EMD, Bank Guarantee (ePBG), and Security Deposit');
      suggestedH3.push('Online RTGS vs Bank Guarantee Refund Tracking');
    } else {
      suggestedH2.push('Detailed Procurement Policy Guidelines 2026');
      suggestedH2.push('Step-by-Step Tender Submission Scrutiny Checklist');
    }

    return {
      articleSlug: slug,
      suggestedH2,
      suggestedH3,
      suggestedExamples: ['Real-world case study of MSME bid exemption claim', 'Sample representation letter template'],
      reason: 'Expanding sub-topics boosts topical authority and search satisfaction'
    };
  }
}

module.exports = new TopicExpansionEngine();
