'use strict';

const { reviewEngine } = require('../engines/review');
const scanner = require('../core/scanner');
const configLoader = require('../core/config');
const path = require('path');

async function runReviewEngineTests() {
  console.log('=== RUNNING AI REVIEW ENGINE INTEGRATION & STRESS BENCHMARK TESTS ===');

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

  const rootDir = path.resolve(__dirname, '../..');
  const config = configLoader.load();
  const state = await scanner.runScanner(rootDir, config);

  const t0 = Date.now();
  const res = await reviewEngine.run(state);
  const duration = Date.now() - t0;

  assert(res.manifest.name === 'AI Review Engine', 'Review engine returns valid manifest');
  assert(res.scores.overallScore >= 0 && res.scores.overallScore <= 100, 'Calculates valid overall score');
  assert(duration < 2000, `Review execution scale test completes in under 2 seconds (Actual: ${duration} ms)`);

  console.log(`\nReview Engine Integration & Benchmark Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReviewEngineTests().catch(err => {
  console.error('Review Engine Test Error:', err);
  process.exit(1);
});
