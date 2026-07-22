'use strict';

const recentProjects = require('../studio/recentProjects');
const commandPalette = require('../studio/commandPalette');

async function runStudioBenchmark() {
  console.log('=== RUNNING ASTRA STUDIO STRESS BENCHMARK (100 PROJECTS & 1,000 REPORTS SCALE) ===\n');

  const t0 = Date.now();

  // 1. Add 100 projects
  for (let i = 1; i <= 100; i++) {
    recentProjects.addRecent(`C:/projects/synth-proj-${i}`, `Synth Proj ${i}`);
    if (i % 10 === 0) recentProjects.pinProject(`C:/projects/synth-proj-${i}`);
  }

  // 2. Perform 1,000 command palette searches
  for (let i = 1; i <= 1000; i++) {
    commandPalette.searchCommands(i % 2 === 0 ? 'SEO' : 'Knowledge');
  }

  const durationMs = Date.now() - t0;
  const recentList = recentProjects.getRecentProjects();

  console.log(`  - Projects Managed   : ${recentList.length} projects`);
  console.log(`  - Command Searches   : 1,000 queries`);
  console.log(`  - Execution Time     : ${durationMs} ms (Target: < 500 ms)\n`);

  if (durationMs >= 500) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 500 ms)`);
    process.exit(1);
  }

  console.log('✅ STUDIO STRESS BENCHMARK PASSED UNDER 500 MS!\n');
}

runStudioBenchmark().catch(err => {
  console.error('Studio Benchmark Error:', err);
  process.exit(1);
});
