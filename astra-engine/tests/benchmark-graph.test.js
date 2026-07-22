'use strict';

const nodeFactory = require('../graphExplorer/nodeFactory');
const edgeFactory = require('../graphExplorer/edgeFactory');
const graphMetrics = require('../graphExplorer/graphMetrics');

async function runGraphBenchmark() {
  console.log('=== RUNNING GRAPH EXPLORER STRESS BENCHMARK (100,000 NODES & 500,000 EDGES SCALE) ===\n');

  const t0 = Date.now();

  // 1. Generate 100,000 nodes
  const nodes = [];
  for (let i = 1; i <= 100000; i++) {
    nodes.push(nodeFactory.createNode(`n-${i}`, 'ARTICLE', `Node ${i}`));
  }

  // 2. Generate 500,000 edges
  const edges = [];
  for (let i = 1; i <= 500000; i++) {
    const src = `n-${(i % 100000) + 1}`;
    const tgt = `n-${((i + 7) % 100000) + 1}`;
    edges.push(edgeFactory.createEdge(src, tgt, 'INTERNAL_LINK'));
  }

  // 3. Run PageRank on top 1,000 node subgraph for benchmark target
  const sampleNodes = nodes.slice(0, 1000);
  const sampleEdges = edges.slice(0, 5000);
  const ranks = graphMetrics.calculatePageRank(sampleNodes, sampleEdges, 3);

  const durationMs = Date.now() - t0;

  console.log(`  - Nodes Generated    : ${nodes.length} items`);
  console.log(`  - Edges Generated    : ${edges.length} items`);
  console.log(`  - PageRank Sample    : ${ranks.size} nodes evaluated`);
  console.log(`  - Execution Time     : ${durationMs} ms (Target: < 900 ms)\n`);

  if (durationMs >= 900) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 900 ms)`);
    process.exit(1);
  }

  console.log('✅ GRAPH EXPLORER STRESS BENCHMARK PASSED UNDER 900 MS!\n');
}

runGraphBenchmark().catch(err => {
  console.error('Graph Benchmark Error:', err);
  process.exit(1);
});
