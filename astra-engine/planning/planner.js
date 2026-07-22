'use strict';

const goalManager = require('./goalManager');
const objectiveTree = require('./objectiveTree');
const planGenerator = require('./planGenerator');
const executionPlanner = require('./executionPlanner');
const milestonePlanner = require('./milestonePlanner');
const planningMetrics = require('./planningMetrics');

class PlannerEngine {
  createMasterPlan() {
    planningMetrics.recordPlan();
    return {
      goals: goalManager.getGoals(),
      objectives: objectiveTree.buildTree(),
      plan: planGenerator.generatePlan(),
      execution: executionPlanner.buildExecutionPlan(),
      milestones: milestonePlanner.getMilestones()
    };
  }
}

module.exports = new PlannerEngine();
