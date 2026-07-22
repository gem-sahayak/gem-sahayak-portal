'use strict';

/**
 * Keyword Cannibalization Detector.
 * Detects multiple articles competing for identical primary keyword topics.
 */
class CannibalizationDetector {
  detectCannibalization(articles = []) {
    const keywordMap = new Map();
    const conflicts = [];

    for (const a of articles) {
      const titleLower = (a.title || '').toLowerCase();

      let mainKeyword = null;
      if (titleLower.includes('emd')) mainKeyword = 'emd rules';
      else if (titleLower.includes('udyam')) mainKeyword = 'udyam registration';
      else if (titleLower.includes('l1')) mainKeyword = 'l1 tender bidder';

      if (mainKeyword) {
        if (!keywordMap.has(mainKeyword)) {
          keywordMap.set(mainKeyword, []);
        }
        keywordMap.get(mainKeyword).push(a.slug);
      }
    }

    for (const [kw, slugs] of keywordMap.entries()) {
      if (slugs.length >= 2) {
        conflicts.push({
          targetKeyword: kw,
          winnerSlug: slugs[0],
          competingSlugs: slugs.slice(1),
          confidence: 0.92,
          recommendation: `Disambiguate sub-topics across ${slugs.join(', ')} to eliminate keyword cannibalization`
        });
      }
    }

    return conflicts;
  }
}

module.exports = new CannibalizationDetector();
