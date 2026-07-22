'use strict';

/**
 * MarketMetrics — Tracks market analysis session metrics.
 */
class MarketMetrics {
  constructor() {
    this.totalMarketAnalyses = 0;
    this.totalCompetitionMaps = 0;
    this.totalCategoryInsights = 0;
  }

  recordAnalysis() { this.totalMarketAnalyses++; }
  recordCompetitionMap() { this.totalCompetitionMaps++; }
  recordCategoryInsight() { this.totalCategoryInsights++; }

  getMetrics() {
    return {
      totalMarketAnalyses: this.totalMarketAnalyses,
      totalCompetitionMaps: this.totalCompetitionMaps,
      totalCategoryInsights: this.totalCategoryInsights
    };
  }
}

module.exports = new MarketMetrics();
