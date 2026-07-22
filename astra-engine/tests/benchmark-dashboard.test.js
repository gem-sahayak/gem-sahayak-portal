'use strict';

const scoreCards = require('../dashboard/widgets/scoreCards');
const issueCards = require('../dashboard/widgets/issueCards');
const overviewDashboard = require('../dashboard/overviewDashboard');

async function runDashboardBenchmark() {
  console.log('=== RUNNING DASHBOARD STRESS BENCHMARK (100 PROJECTS, 100,000 OBJECTS, 10,000 WIDGETS SCALE) ===\n');

  const t0 = Date.now();

  // 1. Generate 10,000 widgets
  const widgets = [];
  for (let i = 1; i <= 10000; i++) {
    widgets.push(scoreCards.renderCard(`Card ${i}`, i % 100));
  }

  // 2. Generate 100,000 report objects
  const reportObjects = [];
  for (let i = 1; i <= 100000; i++) {
    reportObjects.push({ id: `obj-${i}`, value: i * 2, status: 'OK' });
  }

  // 3. Render 100 overview dashboards
  for (let i = 1; i <= 100; i++) {
    overviewDashboard.renderOverview();
  }

  const durationMs = Date.now() - t0;

  console.log(`  - Widgets Rendered    : ${widgets.length} items`);
  console.log(`  - Objects Processed   : ${reportObjects.length} items`);
  console.log(`  - Dashboards Rendered : 100 instances`);
  console.log(`  - Execution Time      : ${durationMs} ms (Target: < 700 ms)\n`);

  if (durationMs >= 700) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 700 ms)`);
    process.exit(1);
  }

  console.log('✅ DASHBOARD STRESS BENCHMARK PASSED UNDER 700 MS!\n');
}

runDashboardBenchmark().catch(err => {
  console.error('Dashboard Benchmark Error:', err);
  process.exit(1);
});
