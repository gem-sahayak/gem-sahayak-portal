'use strict';

const { riskAnalyzer } = require('../riskEngine');

async function runRiskEngineTests() {
  console.log('=== RUNNING RISK ENGINE UNIT TESTS ===');

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

  const res = riskAnalyzer.runAnalysis();
  assert(res.overallRiskScore >= 0, 'Calculates overall risk score');
  assert(res.classification === 'LOW', 'Classifies low operational risk for read-only observer model');

  console.log(`\nRisk Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRiskEngineTests().catch(err => {
  console.error('Risk Engine Test Error:', err);
  process.exit(1);
});
