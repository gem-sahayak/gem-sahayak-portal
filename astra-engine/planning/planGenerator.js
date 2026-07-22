'use strict';

class PlanGenerator {
  generatePlan() {
    return {
      planId: 'plan-master-1',
      steps: [
        { phase: '1. Discovery', action: 'Filesystem Scan' },
        { phase: '2. Analysis', action: 'SEO & Graph Audit' },
        { phase: '3. Simulation', action: 'Dry Run Sandbox' }
      ]
    };
  }
}

module.exports = new PlanGenerator();
