'use strict';

const path = require('path');
const seoEngine = require('../engines/seo');
const graphEngine = require('../engines/graph');
const registryEngine = require('../engines/registry');

async function runStressBenchmark() {
  console.log('=== RUNNING PHASE 3 STRESS BENCHMARK (1,000 ARTICLES TARGET) ===');

  const syntheticArticles = [];
  const syntheticFiles = new Map();
  const syntheticMetadata = new Map();

  // Generate 1,000 Synthetic Articles
  for (let i = 1; i <= 1000; i++) {
    const slug = `phase3-stress-article-${i}`;
    const category = i % 2 === 0 ? 'compliance-policy' : 'gem-bidding';
    const relatedTarget = i > 1 ? `phase3-stress-article-${i - 1}` : 'phase3-stress-article-1000';

    syntheticArticles.push({
      slug,
      title: `Synthetic Public Procurement Guide Title Number ${i}`,
      summary: `Detailed summary statement for synthetic public procurement guide number ${i} for testing Phase 3 performance.`,
      category,
      date: '2026-07-22',
      readingTime: '5 mins',
      canonical: `https://sahayakai.co.in/knowledge/${category}/${slug}`,
      relatedArticles: [relatedTarget],
      relatedTools: ['bid-analyzer']
    });

    const relPath = `posts/${slug}.md`;
    syntheticFiles.set(relPath, {
      relativePath: relPath,
      absolutePath: `/virtual/${relPath}`,
      size: 1024,
      extension: '.md'
    });

    syntheticMetadata.set(relPath, {
      slug,
      title: `Synthetic Public Procurement Guide Title Number ${i}`,
      description: `Detailed summary statement for synthetic public procurement guide number ${i} for testing Phase 3 performance.`,
      category,
      readingTime: '5 mins',
      headings: [{ level: 1, text: 'Main Title' }, { level: 2, text: 'Section Overview' }],
      frontmatter: {
        title: `Synthetic Public Procurement Guide Title Number ${i}`,
        summary: `Detailed summary statement for synthetic public procurement guide number ${i} for testing Phase 3 performance.`
      }
    });
  }

  const stressState = {
    timestamp: new Date(),
    filesystem: { files: syntheticFiles, rootPath: '/virtual' },
    parsedRegistry: {
      articles: syntheticArticles,
      categories: [
        { slug: 'compliance-policy', name: 'Compliance & Policy' },
        { slug: 'gem-bidding', name: 'GeM Bidding' }
      ],
      tools: [{ slug: 'bid-analyzer', name: 'Bid Analyzer' }],
      faqs: []
    },
    metadataMap: syntheticMetadata,
    linkingGraph: { nodes: [], edges: [] }
  };

  const config = { engineVersion: '1.1.0', schemaVersion: '1.0.0', exclusions: [] };

  const startMem = process.memoryUsage();
  const startTime = Date.now();

  // Run all 3 Phase 3 Engines
  await registryEngine.init({ config, state: stressState, logger: { log: () => {}, warn: () => {}, error: () => {} } });
  const regRes = await registryEngine.run(stressState);

  await seoEngine.init({ config, state: stressState, logger: { log: () => {}, warn: () => {}, error: () => {} } });
  const seoRes = await seoEngine.run(stressState);

  await graphEngine.init({ config, state: stressState, logger: { log: () => {}, warn: () => {}, error: () => {} } });
  const graphRes = await graphEngine.run(stressState);

  const totalTime = Date.now() - startTime;
  const endMem = process.memoryUsage();
  const heapUsedMB = (endMem.heapUsed / 1024 / 1024).toFixed(2);

  console.log(`\nStress Benchmark Results:`);
  console.log(`  - Synthetic Articles Evaluated: 1,000`);
  console.log(`  - Registry Engine Time: ${regRes.executionTimeMs} ms`);
  console.log(`  - SEO Engine Time     : ${seoRes.executionTimeMs} ms`);
  console.log(`  - Graph Engine Time   : ${graphRes.executionTimeMs} ms`);
  console.log(`  - Total Suite Execution Time: ${totalTime} ms`);
  console.log(`  - Heap Usage Peak    : ${heapUsedMB} MB\n`);

  if (totalTime > 2000) {
    console.error(`❌ STRESS BENCHMARK FAILED: Total execution time (${totalTime} ms) exceeded 2,000 ms target`);
    process.exit(1);
  } else {
    console.log(`✅ STRESS BENCHMARK PASSED: Total execution time (${totalTime} ms) is UNDER 2,000 ms target!\n`);
  }
}

runStressBenchmark().catch(err => {
  console.error('Stress Benchmark Error:', err);
  process.exit(1);
});
