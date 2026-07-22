'use strict';

const rankingEngine = require('./rankingEngine');
const confidenceEngine = require('./confidenceEngine');
const priorityEngine = require('./priorityEngine');
const decisionMetrics = require('./decisionMetrics');
const decisionHistory = require('./decisionHistory');

class RecommendationEngine {
  constructor() {
    this.manifest = {
      name: 'Decision Intelligence Recommendation Engine',
      version: '1.9.0',
      description: 'Generates prioritized recommendations with confidence percentages & decision history'
    };
  }

  processRecommendations(rawRecs = []) {
    const processed = rawRecs.map(r => {
      const confidence = r.confidence || confidenceEngine.calculateConfidence(2);
      const priority = r.priority || priorityEngine.calculatePriority(r.impact || 'HIGH', 'EASY');
      return {
        ...r,
        confidence,
        priority
      };
    });

    const ranked = rankingEngine.rankRecommendations(processed);
    decisionMetrics.recordDecision();
    decisionHistory.record(ranked);

    return ranked;
  }
}

module.exports = RecommendationEngine;
