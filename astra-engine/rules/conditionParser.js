'use strict';

class ConditionParser {
  parse(conditionString = '') {
    const parts = conditionString.split(/\s+/);
    return {
      field: parts[0] || '',
      operator: parts[1] || '==',
      targetValue: parts[2] || ''
    };
  }
}

module.exports = new ConditionParser();
