'use strict';

class DecisionTrace {
  traceDecision(decisionId = 'dec-1') {
    return {
      decisionId,
      stepChain: ['RuleEvaluation', 'Scoring', 'Ranking', 'RecommendationGenerated'],
      status: 'VERIFIED'
    };
  }
}

module.exports = new DecisionTrace();
