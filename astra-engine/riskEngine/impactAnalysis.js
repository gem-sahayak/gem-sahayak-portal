'use strict';

class ImpactAnalysis {
  analyze() {
    return {
      severity: 'LOW',
      scope: 'READ_ONLY_VALIDATION',
      productionMutationRisk: 'NONE'
    };
  }
}

module.exports = new ImpactAnalysis();
