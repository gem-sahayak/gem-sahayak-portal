'use strict';

/**
 * Answer Planner Engine.
 * Planning ONLY — NO LLM text generation.
 */
class AnswerPlanner {
  planAnswer(queryPlan, contextWindow) {
    const reasoningSteps = [
      `Analyze user search query: "${queryPlan.queryString}"`,
      `Retrieve ${contextWindow.chunksIncluded.length} relevant knowledge chunks`,
      `Build structured citation map from ${contextWindow.citations.length} primary sources`,
      'Formulate answer plan with step-by-step compliance guidance'
    ];

    const evidencePlan = contextWindow.chunksIncluded.map(c => `Evidence from [${c.metadata.slug}]: ${c.content.substring(0, 60)}...`);

    return {
      queryId: queryPlan.queryId,
      reasoningSteps,
      evidencePlan,
      citationsPlan: contextWindow.citations
    };
  }
}

module.exports = new AnswerPlanner();
