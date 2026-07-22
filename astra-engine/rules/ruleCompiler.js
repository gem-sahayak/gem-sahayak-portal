'use strict';

const conditionParser = require('./conditionParser');

class RuleCompiler {
  compile(rawRule) {
    const parsed = conditionParser.parse(rawRule.condition);
    return {
      id: rawRule.id,
      priority: rawRule.priority || 10,
      parsedCondition: parsed,
      action: rawRule.action
    };
  }
}

module.exports = new RuleCompiler();
