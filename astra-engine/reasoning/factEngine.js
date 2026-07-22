'use strict';

class FactEngine {
  collectFacts(state = {}) {
    return [
      { id: 'fact-1', key: 'observerMode', value: true, source: 'Constitution' },
      { id: 'fact-2', key: 'totalArticles', value: (state.parsedRegistry?.articles || []).length, source: 'Registry' },
      { id: 'fact-3', key: 'importGuardActive', value: true, source: 'ImportGuard' }
    ];
  }
}

module.exports = new FactEngine();
