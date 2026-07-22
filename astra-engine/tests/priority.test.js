'use strict';

const severityClassifier = require('../core/reporter/severity');

async function runPriorityTests() {
  console.log('=== RUNNING PRIORITY FRAMEWORK UNIT TESTS ===');

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

  // 1. P0 Critical Deployment Blockers
  const dupCanonical = severityClassifier.classifyIssue({ code: 'DUPLICATE_CANONICAL', file: 'posts/test.md' }, 'seo');
  assert(dupCanonical.priority === 'P0', 'DUPLICATE_CANONICAL assigns P0 priority');

  const regMismatch = severityClassifier.classifyIssue({ code: 'REGISTRY_MISMATCH', file: 'src/content/registry.ts' }, 'registry');
  assert(regMismatch.priority === 'P0', 'REGISTRY_MISMATCH assigns P0 priority');

  // 2. P1 High Priority
  const brokenLink = severityClassifier.classifyIssue({ code: 'BROKEN_INTERNAL_ARTICLE_LINK', file: 'posts/test.md' }, 'seo');
  assert(brokenLink.priority === 'P1', 'BROKEN_INTERNAL_ARTICLE_LINK assigns P1 priority');

  // 3. P2 Medium Priority
  const longDesc = severityClassifier.classifyIssue({ code: 'LONG_DESCRIPTION', file: 'posts/test.md' }, 'seo');
  assert(longDesc.priority === 'P2', 'LONG_DESCRIPTION assigns P2 priority');

  // 4. P3 Editorial Priority
  const orphanArticle = severityClassifier.classifyIssue({ code: 'ORPHAN_ARTICLE_NODE', file: 'posts/test.md' }, 'graph');
  assert(orphanArticle.priority === 'P3', 'ORPHAN_ARTICLE_NODE assigns P3 priority');

  console.log(`\nPriority Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPriorityTests().catch(err => {
  console.error('Priority Test Error:', err);
  process.exit(1);
});
