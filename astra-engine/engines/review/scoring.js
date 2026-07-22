'use strict';

class ReviewScoringEngine {
  calculateAggregateScores(resultsList = []) {
    if (resultsList.length === 0) {
      return {
        overallScore: 100,
        categoryScores: {
          intent: 100,
          authority: 100,
          completeness: 100,
          readability: 100,
          seo: 100,
          entities: 100,
          internalLinks: 100,
          eeat: 100,
          freshness: 100
        },
        articleCount: 0
      };
    }

    let sumIntent = 0;
    let sumAuthority = 0;
    let sumCompleteness = 0;
    let sumReadability = 0;
    let sumSeo = 0;
    let sumEntities = 0;
    let sumLinks = 0;
    let sumEeat = 0;
    let sumFreshness = 0;

    for (const r of resultsList) {
      sumIntent += r.intentScore || 90;
      sumAuthority += r.authorityScore || 90;
      sumCompleteness += r.completenessScore || 90;
      sumReadability += r.readabilityScore || 90;
      sumSeo += r.seoScore || 90;
      sumEntities += r.entityScore || 90;
      sumLinks += r.linkScore || 90;
      sumEeat += r.eeatScore || 90;
      sumFreshness += r.freshnessScore || 90;
    }

    const count = resultsList.length;
    const intent = Math.round(sumIntent / count);
    const authority = Math.round(sumAuthority / count);
    const completeness = Math.round(sumCompleteness / count);
    const readability = Math.round(sumReadability / count);
    const seo = Math.round(sumSeo / count);
    const entities = Math.round(sumEntities / count);
    const internalLinks = Math.round(sumLinks / count);
    const eeat = Math.round(sumEeat / count);
    const freshness = Math.round(sumFreshness / count);

    // Weighted Overall Score calculation
    const overallScore = Math.round(
      (intent * 0.20) +
      (eeat * 0.20) +
      (completeness * 0.15) +
      (authority * 0.10) +
      (entities * 0.10) +
      (seo * 0.10) +
      (internalLinks * 0.05) +
      (freshness * 0.05) +
      (readability * 0.05)
    );

    return {
      overallScore,
      categoryScores: {
        intent,
        authority,
        completeness,
        readability,
        seo,
        entities,
        internalLinks,
        eeat,
        freshness
      },
      articleCount: count,
      evaluatedAt: new Date().toISOString()
    };
  }
}

module.exports = new ReviewScoringEngine();
