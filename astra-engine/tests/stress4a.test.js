'use strict';

const fingerprintManager = require('../core/fingerprint');
const incrementalComparer = require('../core/incremental/comparer');

async function runPhase4AStressBenchmark() {
  console.log('=== RUNNING PHASE 4A PLATFORM STRESS BENCHMARK ===\n');

  const fileScales = [100, 1000, 5000, 10000];

  for (const scale of fileScales) {
    console.log(`--- Benchmark Scale: ${scale} Files ---`);

    const diskFiles = new Map();
    const dbEntries = new Map();

    for (let i = 1; i <= scale; i++) {
      const relP = `posts/scale-article-${i}.md`;
      const hash = `sha256_hash_value_for_item_${i}`;

      diskFiles.set(relP, { relativePath: relP, absolutePath: `/vscale/${relP}`, size: 1024 });

      // Simulate 95% unchanged, 5% modified/added for incremental scan comparison
      if (i <= Math.floor(scale * 0.95)) {
        dbEntries.set(relP, { filePath: relP, hash, mtime: 1000 });
      }
    }

    // 1. Cold Scan Simulation (Scan all files & recalculate SHA256 hashes)
    const coldT0 = Date.now();
    for (const [p, f] of diskFiles.entries()) {
      // Simulate disk hash calculation
      const h = `sha256_hash_value_for_item_${p}`;
    }
    const coldTime = Date.now() - coldT0;

    // 2. Incremental Scan Simulation (Fingerprint lookup & delta compare)
    const incT0 = Date.now();
    const mockDb = { entries: dbEntries };
    const compResult = incrementalComparer.compare(diskFiles, mockDb);
    const incTime = Date.now() - incT0;

    const speedupMultiplier = coldTime > 0 ? (coldTime / (incTime || 1)).toFixed(1) : 'N/A';
    const hitRate = compResult.stats.fingerprintHitRatePct;

    console.log(`  - Cold Scan Time        : ${coldTime} ms`);
    console.log(`  - Incremental Scan Time : ${incTime} ms (${speedupMultiplier}x speedup)`);
    console.log(`  - Fingerprint Hit Rate  : ${hitRate}%`);
    console.log(`  - Unchanged Delta (Saved): ${compResult.stats.unchangedCount} files\n`);
  }

  console.log('✅ PHASE 4A STRESS BENCHMARK COMPLETE!\n');
}

runPhase4AStressBenchmark().catch(err => {
  console.error('Phase 4A Stress Benchmark Error:', err);
  process.exit(1);
});
