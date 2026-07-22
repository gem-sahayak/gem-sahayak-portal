'use strict';

const riskHeatmap = require('../visualization/riskHeatmap');

async function runHeatmapTests() {
  console.log('=== RUNNING HEATMAP VISUALIZER UNIT TESTS ===');

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

  const map = riskHeatmap.renderHeatmap();
  assert(map.type === 'RISK_HEATMAP', 'Renders risk heatmap model');

  console.log(`\nHeatmap Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runHeatmapTests().catch(err => {
  console.error('Heatmap Test Error:', err);
  process.exit(1);
});
