'use strict';

const seoRecommendation = require('./seoRecommendation');
const knowledgeRecommendation = require('./knowledgeRecommendation');
const optimizationRecommendation = require('./optimizationRecommendation');
const reviewRecommendation = require('./reviewRecommendation');
const workflowRecommendation = require('./workflowRecommendation');
const riskRecommendation = require('./riskRecommendation');

module.exports = {
  seoRecommendation,
  knowledgeRecommendation,
  optimizationRecommendation,
  reviewRecommendation,
  workflowRecommendation,
  riskRecommendation,
  getAllRecommendations(state = {}) {
    return [
      ...seoRecommendation.generate(state),
      ...knowledgeRecommendation.generate(state),
      ...optimizationRecommendation.generate(state),
      ...reviewRecommendation.generate(state),
      ...workflowRecommendation.generate(state),
      ...riskRecommendation.generate(state)
    ];
  }
};
