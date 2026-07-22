'use strict';

const ruleRegistry = require('./ruleRegistry');
const expressionEvaluator = require('./expressionEvaluator');
const ruleCompiler = require('./ruleCompiler');
const actionPlanner = require('./actionPlanner');
const ruleMetrics = require('./ruleMetrics');

class RuleEngine {
  constructor() {
    this.manifest = {
      name: 'Rule Engine',
      version: '1.9.0',
      description: 'Parses conditions, evaluates boolean expressions, and plans rule actions'
    };
  }

  evaluateRules(context = {}) {
    const rules = ruleRegistry.list();
    const triggered = [];

    for (const r of rules) {
      const compiled = ruleCompiler.compile(r);
      const pass = expressionEvaluator.evaluate(compiled.parsedCondition, context);
      ruleMetrics.recordEvaluation(pass);
      if (pass) triggered.push(compiled);
    }

    const plan = actionPlanner.buildActionPlan(triggered);
    return {
      evaluatedCount: rules.length,
      triggeredCount: triggered.length,
      actionPlan: plan
    };
  }
}

module.exports = RuleEngine;
