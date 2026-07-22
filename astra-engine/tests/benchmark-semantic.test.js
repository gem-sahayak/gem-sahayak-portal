'use strict';

const { semanticEngine } = require('../engines/semantic');

async function runSemanticBenchmark() {
  console.log('=== RUNNING SEMANTIC SEO ENGINE STRESS BENCHMARK (1,000 ARTICLES SCALE) ===\n');

  // Generate 1,000 synthetic article objects for stress benchmark
  const mockArticles = [];
  for (let i = 1; i <= 1000; i++) {
    mockArticles.push({
      slug: `synth-article-${i}`,
      title: `GeM Portal Guide ${i} for Udyam Aadhaar and EMD Refund Rules`,
      summary: `Comprehensive procurement guide explaining L1 comparison criteria and GFR rules for seller ${i}`,
      category: i % 2 === 0 ? 'gem-registration' : 'compliance-policy',
      relatedArticles: [`synth-article-${Math.max(1, i - 1)}`],
      relatedTools: ['eligibility-checker']
    });
  }

  const mockState = {
    parsedRegistry: {
      articles: mockArticles,
      categories: [{ slug: 'gem-registration' }, { slug: 'compliance-policy' }]
    }
  };

  const t0 = Date.now();
  const res = await semanticEngine.run(mockState);
  const durationMs = Date.now() - t0;

  console.log(`  - Scale Tested        : 1,000 Articles`);
  console.log(`  - Analysis Time       : ${durationMs} ms (Target: < 3,000 ms)`);
  console.log(`  - Overall Score       : ${res.scores.overallScore} / 100`);
  console.log(`  - Clusters Created    : ${res.clusters.length}`);
  console.log(`  - Entity Nodes Count  : ${res.entityCoverage.totalEntitiesDetected}\n`);

  if (durationMs >= 3000) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 3000 ms)`);
    process.exit(1);
  }

  console.log('✅ SEMANTIC STRESS BENCHMARK PASSED UNDER 3 SECONDS!\n');
}

runSemanticBenchmark().catch(err => {
  console.error('Semantic Benchmark Error:', err);
  process.exit(1);
});
