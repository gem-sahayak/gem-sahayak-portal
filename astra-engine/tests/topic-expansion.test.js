'use strict';

const topicExpansionEngine = require('../engines/optimizer/topicExpansion');

async function runTopicExpansionTests() {
  console.log('=== RUNNING TOPIC EXPANSION ENGINE UNIT TESTS ===');

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

  const res = topicExpansionEngine.generateTopicExpansions({ slug: 'udyam-error', title: 'Udyam Registration Error' });
  assert(res.suggestedH2.length >= 1, 'Recommends missing H2 headings for topic expansion');

  console.log(`\nTopic Expansion Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTopicExpansionTests().catch(err => {
  console.error('Topic Expansion Test Error:', err);
  process.exit(1);
});
