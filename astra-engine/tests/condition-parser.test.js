'use strict';

const conditionParser = require('../rules/conditionParser');

async function runConditionParserTests() {
  console.log('=== RUNNING CONDITION PARSER UNIT TESTS ===');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  const parsed = conditionParser.parse('score > 80');
  assert(parsed.field === 'score', 'Parses field name score');
  assert(parsed.operator === '>', 'Parses operator >');
  assert(parsed.targetValue === '80', 'Parses target value 80');

  console.log(`\nCondition Parser Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runConditionParserTests().catch(err => {
  console.error('Condition Parser Test Error:', err);
  process.exit(1);
});
