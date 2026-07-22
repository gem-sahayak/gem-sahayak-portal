'use strict';

/**
 * Query Planner.
 * Detects intent, question type, expected answer, and knowledge sources needed.
 */
class QueryPlanner {
  planQuery(queryString = '') {
    const qLower = queryString.toLowerCase();

    let questionType = 'Informational';
    if (qLower.includes('how') || qLower.includes('kaise')) questionType = 'Procedural';
    else if (qLower.includes('what is') || qLower.includes('kya hai')) questionType = 'Definitional';

    return {
      queryId: `qry-${Math.random().toString(36).substring(2, 8)}`,
      queryString,
      questionType,
      expectedAnswerType: 'TextWithCitations',
      requiredKnowledgeSources: ['Articles', 'Hubs', 'FAQs']
    };
  }
}

module.exports = new QueryPlanner();
