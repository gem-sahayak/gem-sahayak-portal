'use strict';

class ExpressionEvaluator {
  evaluate(condition, context = {}) {
    const val = context[condition.field];
    if (condition.operator === '==') return val == condition.targetValue;
    if (condition.operator === '>') return val > Number(condition.targetValue);
    if (condition.operator === '<') return val < Number(condition.targetValue);
    return true;
  }
}

module.exports = new ExpressionEvaluator();
