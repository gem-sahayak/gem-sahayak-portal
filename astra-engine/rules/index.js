'use strict';

const RuleEngine = require('./ruleEngine');
const ruleCompiler = require('./ruleCompiler');
const conditionParser = require('./conditionParser');
const expressionEvaluator = require('./expressionEvaluator');
const ruleRegistry = require('./ruleRegistry');
const actionPlanner = require('./actionPlanner');
const ruleMetrics = require('./ruleMetrics');

const defaultEngine = new RuleEngine();

module.exports = {
  ruleEngine: defaultEngine,
  RuleEngine,
  ruleCompiler,
  conditionParser,
  expressionEvaluator,
  ruleRegistry,
  actionPlanner,
  ruleMetrics
};
