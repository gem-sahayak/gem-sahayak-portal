'use strict';

const pluginTelemetry = require('../core/plugins/telemetry');

async function runPluginTelemetryTests() {
  console.log('=== RUNNING PLUGIN TELEMETRY ENGINE UNIT TESTS ===');

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

  pluginTelemetry.clear();
  pluginTelemetry.recordHookExecution('test-p1', 'afterScan', 45, 'SUCCESS');
  pluginTelemetry.recordHookExecution('test-p1', 'afterScan', 55, 'SUCCESS');

  const snap = pluginTelemetry.getSnapshot();
  assert(snap.pluginCount === 1, 'Telemetry captures active plugin metrics');

  const pStats = snap.telemetry[0];
  assert(pStats.totalCalls === 2, 'Tracks total calls');
  assert(pStats.avgTimeMs === 50, 'Calculates accurate average execution runtime (50ms)');
  assert(pStats.successRatePct === 100, 'Calculates 100% success rate');

  console.log(`\nPlugin Telemetry Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPluginTelemetryTests().catch(err => {
  console.error('Plugin Telemetry Test Error:', err);
  process.exit(1);
});
