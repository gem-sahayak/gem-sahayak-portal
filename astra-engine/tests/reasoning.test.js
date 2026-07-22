'use strict';

const { reasoningEngine } = require('../reasoning');

async function runReasoningTests() {
  console.log('=== RUNNING REASONING ENGINE BASIC UNIT TESTS ===');

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

  assert(reasoningEngine.manifest.name === 'Enterprise Autonomous Reasoning & Planning Engine', 'Reasoning engine returns correct manifest name');
  assert(reasoningEngine.manifest.version === '1.11.0', 'Reasoning engine returns version 1.11.0');

  console.log(`\nReasoning Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReasoningTests().catch(err => {
  console.error('Reasoning Test Error:', err);
  process.exit(1);
});
