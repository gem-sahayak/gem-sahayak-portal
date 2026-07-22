'use strict';

/**
 * Anchor Text Generator Engine.
 * Generates natural, exact, partial, brand, question, and semantic anchors.
 */
class AnchorTextGenerator {
  generateAnchors(targetSlug, targetTitle) {
    const title = targetTitle || targetSlug.replace(/-/g, ' ');

    return [
      { targetSlug, anchorType: 'NATURAL', anchorText: `Read full guide on ${title}`, overOptimizationRisk: 'LOW' },
      { targetSlug, anchorType: 'EXACT', anchorText: title, overOptimizationRisk: 'MEDIUM' },
      { targetSlug, anchorType: 'PARTIAL', anchorText: `${title} rules & guidelines`, overOptimizationRisk: 'LOW' },
      { targetSlug, anchorType: 'BRAND', anchorText: 'SahayakAI GeM Portal Assistant', overOptimizationRisk: 'LOW' },
      { targetSlug, anchorType: 'QUESTION', anchorText: `How to solve ${title}?`, overOptimizationRisk: 'LOW' },
      { targetSlug, anchorType: 'SEMANTIC', anchorText: 'Government Procurement Process Guidelines', overOptimizationRisk: 'LOW' }
    ];
  }
}

module.exports = new AnchorTextGenerator();
