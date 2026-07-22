'use strict';

const headingOptimizerEngine = require('../engines/optimizer/headingOptimizer');

async function runHeadingsTests() {
  console.log('=== RUNNING HEADING OPTIMIZER UNIT TESTS ===');

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

  const res = headingOptimizerEngine.evaluateHeadings({ slug: 'udyam-error', title: 'Short Title' });
  assert(res.issues.length >= 1, 'Flags short title length issues');

  console.log(`\nHeadings Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runHeadingsTests().catch(err => {
  console.error('Headings Test Error:', err);
  process.exit(1);
});
