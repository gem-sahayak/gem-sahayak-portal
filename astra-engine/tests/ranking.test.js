'use strict';

const rankingEngine = require('../decision/rankingEngine');

async function runRankingTests() {
  console.log('=== RUNNING RANKING ENGINE UNIT TESTS ===');

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

  const items = [
    { title: 'Low Rec', impact: 'LOW', confidence: 0.5 },
    { title: 'High Rec', impact: 'HIGH', confidence: 0.9 }
  ];

  const ranked = rankingEngine.rankRecommendations(items);
  assert(ranked[0].title === 'High Rec', 'Ranks high impact high confidence items first');

  console.log(`\nRanking Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runRankingTests().catch(err => {
  console.error('Ranking Engine Test Error:', err);
  process.exit(1);
});
