'use strict';

const scoreCharts = require('../dashboard/charts/scoreCharts');
const topologyCharts = require('../dashboard/charts/topologyCharts');

async function runDashboardChartsTests() {
  console.log('=== RUNNING DASHBOARD CHARTS UNIT TESTS ===');

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

  const radar = scoreCharts.renderScoreDistribution();
  assert(radar.chartType === 'RADAR', 'Renders RADAR score chart model');

  const top = topologyCharts.renderClusterTopology();
  assert(top.chartType === 'GRAPH_TOPOLOGY', 'Renders GRAPH_TOPOLOGY chart model');

  console.log(`\nDashboard Charts Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardChartsTests().catch(err => {
  console.error('Dashboard Charts Test Error:', err);
  process.exit(1);
});
