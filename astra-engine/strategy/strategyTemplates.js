'use strict';

class StrategyTemplates {
  getTemplates() {
    return [
      { id: 'st-primary', name: 'Primary Full-Scan Audit', type: 'PRIMARY' },
      { id: 'st-fallback', name: 'Fallback Incremental Delta Audit', type: 'FALLBACK' }
    ];
  }
}

module.exports = new StrategyTemplates();
