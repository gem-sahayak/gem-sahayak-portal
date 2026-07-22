'use strict';

const scoreCards = require('../dashboard/widgets/scoreCards');
const issueCards = require('../dashboard/widgets/issueCards');

async function runDashboardWidgetsTests() {
  console.log('=== RUNNING DASHBOARD WIDGETS UNIT TESTS ===');

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

  const card = scoreCards.renderCard('Test Card', 90);
  assert(card.status === 'HEALTHY', 'Renders healthy score card');

  const issues = issueCards.renderIssues([{ id: 'ISS-1', description: 'Test issue' }]);
  assert(issues.length === 1, 'Renders issue cards payload');

  console.log(`\nDashboard Widgets Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDashboardWidgetsTests().catch(err => {
  console.error('Dashboard Widgets Test Error:', err);
  process.exit(1);
});
