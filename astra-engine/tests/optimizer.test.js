'use strict';

const { optimizerEngine } = require('../engines/optimizer');

async function runOptimizerTests() {
  console.log('=== RUNNING OPTIMIZER ENGINE BASIC UNIT TESTS ===');

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

  assert(optimizerEngine.manifest.name === 'AI Content Optimization Platform', 'Engine returns correct manifest name');
  assert(optimizerEngine.manifest.version === '1.5.2', 'Engine returns version 1.5.2');

  console.log(`\nOptimizer Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runOptimizerTests().catch(err => {
  console.error('Optimizer Test Error:', err);
  process.exit(1);
});
