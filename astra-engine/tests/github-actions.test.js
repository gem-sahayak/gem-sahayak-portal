'use strict';

const fs = require('fs');
const path = require('path');

async function runGithubActionsTests() {
  console.log('=== RUNNING GITHUB ACTIONS WORKFLOWS UNIT TESTS ===');

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

  const ciPath = path.join(__dirname, '../../.github/workflows/astra-ci.yml');
  const relPath = path.join(__dirname, '../../.github/workflows/astra-release.yml');

  assert(fs.existsSync(ciPath), 'astra-ci.yml GitHub Actions workflow file exists');
  assert(fs.existsSync(relPath), 'astra-release.yml GitHub Actions workflow file exists');

  console.log(`\nGitHub Actions Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runGithubActionsTests().catch(err => {
  console.error('GitHub Actions Test Error:', err);
  process.exit(1);
});
