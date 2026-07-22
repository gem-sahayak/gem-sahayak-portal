'use strict';

const knowledgeReasoner = require('../knowledgeReasoner');

async function runKnowledgeReasonerTests() {
  console.log('=== RUNNING KNOWLEDGE REASONER UNIT TESTS ===');

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

  const res = knowledgeReasoner.graphReasoner.reasonOverGraph();
  assert(res.status === 'OPTIMAL_TOPOLOGY', 'Reasons over graph topology');

  console.log(`\nKnowledge Reasoner Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runKnowledgeReasonerTests().catch(err => {
  console.error('Knowledge Reasoner Test Error:', err);
  process.exit(1);
});
