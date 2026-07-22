'use strict';

class SharedPlanning {
  collaborativePlan() {
    return { planId: 'shared-plan-1', steps: ['Scan', 'Audit', 'Report'] };
  }
}

module.exports = new SharedPlanning();
