'use strict';

class PlanComparator {
  comparePlans(p1, p2) {
    return { recommended: p1, comparison: 'P1 offers lower risk' };
  }
}

module.exports = new PlanComparator();
