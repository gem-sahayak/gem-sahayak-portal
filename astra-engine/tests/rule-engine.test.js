'use strict';

const { ruleEngine, ruleRegistry } = require('../rules');

async function runRuleEngineTests() {
  console.log('=== RUNNING RULE ENGINE UNIT TESTS ===');

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

  ruleRegistry.register({ id: 'rule-1', condition: 'errorCount > 0', action: 'ALERT', priority: 10 });
  const res = ruleEngine.evaluateRules({ errorCount: 5 });

  assert(res.evaluatedCount >= 1, 'Evaluates registered rule conditions');
  assert(res.triggeredCount === 1, 'Triggers matching rule actions');

  console.log(`\nRule Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRuleEngineTests().catch(err => {
  console.error('Rule Engine Test Error:', err);
  process.exit(1);
});
