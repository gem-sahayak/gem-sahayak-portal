'use strict';

const { forecastEngine } = require('../forecast');

async function runForecastTests() {
  console.log('=== RUNNING FORECAST ENGINE UNIT TESTS ===');

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

  const res = forecastEngine.runForecast();
  assert(res.runtime.projectedExecutionMs === 15, 'Forecasts projected execution runtime');
  assert(res.scaling.scaleLimitStatus === 'HEALTHY', 'Forecasts healthy scaling limit status');

  console.log(`\nForecast Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runForecastTests().catch(err => {
  console.error('Forecast Test Error:', err);
  process.exit(1);
});
