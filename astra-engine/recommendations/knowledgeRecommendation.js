'use strict';

class KnowledgeRecommendationModel {
  generate(state = {}) {
    return [
      {
        id: 'rec-knw-1',
        category: 'KNOWLEDGE',
        title: 'Re-index Procurement Rules Chunks for RAG Cache',
        impact: 'MEDIUM',
        confidence: 0.88,
        target: 'vectorStore'
      }
    ];
  }
}

module.exports = new KnowledgeRecommendationModel();
