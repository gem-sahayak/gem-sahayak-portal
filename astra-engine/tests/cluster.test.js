'use strict';

const clusterEngine = require('../engines/semantic/clusterEngine');

async function runClusterTests() {
  console.log('=== RUNNING CONTENT CLUSTER ENGINE UNIT TESTS ===');

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

  const clusters = clusterEngine.buildClusters(
    [{ slug: 'udyam-error', category: 'gem-registration' }, { slug: 'partnership-docs', category: 'gem-registration' }],
    [{ slug: 'gem-registration' }]
  );

  assert(clusters.length === 1, 'Builds content cluster for target category');
  assert(clusters[0].pillarSlug === 'udyam-error', 'Assigns pillar article');

  console.log(`\nCluster Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runClusterTests().catch(err => {
  console.error('Cluster Test Error:', err);
  process.exit(1);
});
