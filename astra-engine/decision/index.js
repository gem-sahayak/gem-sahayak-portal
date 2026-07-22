'use strict';

const RecommendationEngine = require('./recommendationEngine');
const rankingEngine = require('./rankingEngine');
const confidenceEngine = require('./confidenceEngine');
const priorityEngine = require('./priorityEngine');
const scoringEngine = require('./scoringEngine');
const decisionMetrics = require('./decisionMetrics');
const decisionHistory = require('./decisionHistory');

const defaultEngine = new RecommendationEngine();

module.exports = {
  recommendationEngine: defaultEngine,
  RecommendationEngine,
  rankingEngine,
  confidenceEngine,
  priorityEngine,
  scoringEngine,
  decisionMetrics,
  decisionHistory
};
