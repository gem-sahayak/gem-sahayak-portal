'use strict';

const severityClassifier = require('../core/reporter/severity');

async function runSeverityTests() {
  console.log('=== RUNNING SEVERITY FRAMEWORK UNIT TESTS ===');

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

  // 1. Check mapping of critical FAIL codes
  const missingTitleIssue = severityClassifier.classifyIssue({ code: 'MISSING_TITLE', message: 'Missing title tag', file: 'posts/test.md' }, 'seo');
  assert(missingTitleIssue.severity === 'FAIL', 'MISSING_TITLE classifies as FAIL');
  assert(missingTitleIssue.code === 'SEO001', 'MISSING_TITLE maps to standardized code SEO001');

  // 2. Check mapping of RECOMMENDATION codes
  const shortTitleIssue = severityClassifier.classifyIssue({ code: 'SHORT_TITLE', message: 'Short title', file: 'posts/test.md' }, 'seo');
  assert(shortTitleIssue.severity === 'RECOMMENDATION', 'SHORT_TITLE classifies as RECOMMENDATION');
  assert(shortTitleIssue.code === 'SEO002', 'SHORT_TITLE maps to standardized code SEO002');

  // 3. Check mapping of WARNING codes
  const brokenLinkIssue = severityClassifier.classifyIssue({ code: 'BROKEN_INTERNAL_ARTICLE_LINK', message: 'Broken link', file: 'posts/test.md' }, 'seo');
  assert(brokenLinkIssue.severity === 'WARNING', 'BROKEN_INTERNAL_ARTICLE_LINK classifies as WARNING');
  assert(brokenLinkIssue.code === 'SEO011', 'BROKEN_INTERNAL_ARTICLE_LINK maps to standardized code SEO011');

  // 4. Standard Issue Object Structure Verification
  const requiredKeys = ['id', 'engine', 'validator', 'severity', 'priority', 'code', 'file', 'entity', 'message', 'recommendation'];
  for (const k of requiredKeys) {
    assert(missingTitleIssue[k] !== undefined, `Standard Issue object contains key "${k}"`);
  }

  console.log(`\nSeverity Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSeverityTests().catch(err => {
  console.error('Severity Test Error:', err);
  process.exit(1);
});
