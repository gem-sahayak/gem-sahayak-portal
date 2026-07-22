'use strict';

const MockAiAdapter = require('./adapters/mockAdapter');
const promptBuilder = require('./promptBuilder');
const reasoningEngine = require('./reasoning');
const scoringEngine = require('./scoring');
const recommendationEngine = require('./recommendation');

class ReviewEngine {
  constructor(adapter = new MockAiAdapter()) {
    this.manifest = {
      name: 'AI Review Engine',
      version: '1.5.0',
      description: 'Semantic intent, EEAT, and topical completeness auditor'
    };
    this.adapter = adapter;
  }

  async init(ctx = {}) {
    // Adapter initialization if needed
  }

  async run(state) {
    const articles = state.parsedRegistry?.articles || [];
    const results = [];
    const allGaps = [];
    const issues = [];

    for (const art of articles) {
      const revRes = await this.adapter.review(art);
      results.push(revRes);

      const gaps = reasoningEngine.analyzeSemanticGaps(art, revRes);
      allGaps.push(...gaps);

      for (const gap of gaps) {
        issues.push({
          id: 'REV-' + Math.random().toString(36).substring(2, 8),
          engine: 'review-engine',
          severity: 'RECOMMENDATION',
          priority: 'P2',
          score: revRes.completenessScore,
          confidence: gap.confidence,
          category: gap.type === 'MISSING_TOPIC_GAP' ? 'Completeness' : 'Intent',
          message: gap.reason,
          recommendation: `Add section covering ${gap.topics ? gap.topics.join(', ') : 'more details'}`,
          reason: gap.reason
        });
      }
    }

    const scores = scoringEngine.calculateAggregateScores(results);
    const recommendations = recommendationEngine.generateRecommendations(allGaps);

    return {
      manifest: this.manifest,
      verdict: issues.length > 0 ? 'WARNING' : 'PASS',
      errors: [],
      warnings: issues,
      scores,
      recommendations,
      summary: {
        overallScore: scores.overallScore,
        totalArticlesEvaluated: articles.length,
        totalRecommendations: recommendations.length
      }
    };
  }
}

module.exports = ReviewEngine;
