'use strict';

class ActionPlanner {
  buildActionPlan(triggeredRules = []) {
    return triggeredRules.map(r => ({
      ruleId: r.id,
      action: r.action,
      priority: r.priority
    })).sort((a, b) => b.priority - a.priority);
  }
}

module.exports = new ActionPlanner();
