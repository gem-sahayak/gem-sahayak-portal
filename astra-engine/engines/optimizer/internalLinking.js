'use strict';

/**
 * Internal Linking Intelligence Engine.
 * Recommends optimal outgoing/incoming links between Hubs, Pillars, FAQs, and Tools.
 */
class InternalLinkingEngine {
  generateLinkRecommendations(articles = []) {
    const recommendations = [];

    for (let i = 0; i < articles.length; i++) {
      const current = articles[i];

      // Recommend tool link if article doesn't have tools
      if (!current.relatedTools || current.relatedTools.length === 0) {
        recommendations.push({
          sourceSlug: current.slug,
          targetSlug: 'eligibility-checker',
          linkType: 'TOOL',
          anchorSuggestion: 'Check GeM Tender Eligibility Online',
          reason: 'Article discusses eligibility rules but lacks direct tool link CTA',
          estimatedSeoImpact: 'HIGH'
        });
      }

      // Recommend related article link if only 1 related article exists
      if (!current.relatedArticles || current.relatedArticles.length <= 1) {
        const target = articles[(i + 1) % articles.length];
        if (target && target.slug !== current.slug) {
          recommendations.push({
            sourceSlug: current.slug,
            targetSlug: target.slug,
            linkType: 'RELATED',
            anchorSuggestion: target.title || 'Related GeM Compliance Guide',
            reason: 'Strengthen cluster interlinking density',
            estimatedSeoImpact: 'MEDIUM'
          });
        }
      }
    }

    return recommendations;
  }
}

module.exports = new InternalLinkingEngine();
