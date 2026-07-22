'use strict';

class GoalManager {
  getGoals() {
    return [
      { id: 'goal-1', title: 'Maintain 100% Repository SEO Integrity', priority: 'CRITICAL' },
      { id: 'goal-2', title: 'Enforce Zero Production Mutations', priority: 'CRITICAL' }
    ];
  }
}

module.exports = new GoalManager();
