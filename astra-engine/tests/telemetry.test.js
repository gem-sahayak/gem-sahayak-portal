'use strict';

const TelemetryCollector = require('../core/telemetry/metrics');

async function runTelemetryTests() {
  console.log('=== RUNNING TELEMETRY ENGINE UNIT TESTS ===');

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

  const tel = new TelemetryCollector();
  tel.startTimer('test_run');
  tel.incrementCounter('filesProcessed', 100);
  tel.incrementCounter('articlesProcessed', 50);

  const elapsed = tel.stopTimer('test_run');
  assert(typeof elapsed === 'number', 'Timer returns elapsed milliseconds');

  const snap = tel.getSnapshot();
  assert(snap.throughput.totalFiles === 100, 'Telemetry tracks total files count');
  assert(snap.throughput.totalArticles === 50, 'Telemetry tracks total articles count');
  assert(snap.memory.heapUsedMB > 0, 'Telemetry captures heap memory footprint');

  console.log(`\nTelemetry Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTelemetryTests().catch(err => {
  console.error('Telemetry Test Error:', err);
  process.exit(1);
});
