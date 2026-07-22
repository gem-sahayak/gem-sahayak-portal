'use strict';

class PlanningMetrics {
  constructor() {
    this.plansGenerated = 0;
  }

  recordPlan() {
    this.plansGenerated++;
  }

  getMetrics() {
    return { plansGenerated: this.plansGenerated };
  }
}

module.exports = new PlanningMetrics();
