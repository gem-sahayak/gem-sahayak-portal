'use strict';

const scenarioPlanning = require('../scenarioPlanning');

async function runScenarioTests() {
  console.log('=== RUNNING SCENARIO PLANNING UNIT TESTS ===');

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

  const list = scenarioPlanning.scenarioGenerator.generateScenarios();
  assert(list.length >= 2, 'Generates multiple scenario options');

  const comp = scenarioPlanning.comparisonEngine.compareScenarios(list);
  assert(comp.bestScenario.name.length > 0, 'Compares scenarios and selects best scenario');

  console.log(`\nScenario Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runScenarioTests().catch(err => {
  console.error('Scenario Test Error:', err);
  process.exit(1);
});
