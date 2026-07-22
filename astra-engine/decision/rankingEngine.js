'use strict';

const scoringEngine = require('./scoringEngine');

class RankingEngine {
  rankRecommendations(recommendations = []) {
    return recommendations.map(rec => ({
      ...rec,
      score: scoringEngine.calculateScore(rec)
    })).sort((a, b) => b.score - a.score);
  }
}

module.exports = new RankingEngine();
