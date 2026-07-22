'use strict';

const { optimizerEngine } = require('../engines/optimizer');

async function runOptimizerBenchmark() {
  console.log('=== RUNNING AI CONTENT OPTIMIZER STRESS BENCHMARK (5,000 ARTICLES SCALE) ===\n');

  // Generate 5,000 synthetic articles for stress benchmark
  const mockArticles = [];
  for (let i = 1; i <= 5000; i++) {
    mockArticles.push({
      slug: `synth-opt-article-${i}`,
      title: `GeM Portal Compliance Guide ${i} for Udyam and EMD Refund Rules`,
      summary: `Procurement guide explaining L1 comparison criteria and GFR rules for seller ${i}`,
      category: i % 2 === 0 ? 'gem-registration' : 'compliance-policy',
      relatedArticles: [`synth-opt-article-${Math.max(1, i - 1)}`],
      relatedTools: ['eligibility-checker']
    });
  }

  const mockState = {
    parsedRegistry: {
      articles: mockArticles
    }
  };

  const t0 = Date.now();
  const res = await optimizerEngine.run(mockState);
  const durationMs = Date.now() - t0;

  console.log(`  - Scale Tested        : 5,000 Articles`);
  console.log(`  - Execution Time      : ${durationMs} ms (Target: < 1,200 ms)`);
  console.log(`  - Overall Score       : ${res.scores.overallOptimizationScore} / 100`);
  console.log(`  - Suggestions Count   : ${res.suggestions.length}`);
  console.log(`  - Internal Links Recs : ${res.internalLinks.length}\n`);

  if (durationMs >= 1200) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 1200 ms)`);
    process.exit(1);
  }

  console.log('✅ OPTIMIZER STRESS BENCHMARK PASSED UNDER 1,200 MS!\n');
}

runOptimizerBenchmark().catch(err => {
  console.error('Optimizer Benchmark Error:', err);
  process.exit(1);
});
