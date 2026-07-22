'use strict';

const reporter = require('../core/reporter');
const severityClassifier = require('../core/reporter/severity');

async function runReporterTests() {
  console.log('=== RUNNING REPORTER ENGINE UNIT TESTS ===');

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

  const sampleData = {
    summary: { timestamp: new Date().toISOString(), executionTimeMs: 45, totalEnginesRun: 1 },
    results: [
      {
        engineName: 'seo-validation-engine',
        errors: [{ code: 'MISSING_TITLE', message: 'Missing title', file: 'posts/test.md' }],
        warnings: [{ code: 'LONG_DESCRIPTION', message: 'Long description', file: 'posts/test.md' }]
      }
    ]
  };

  // 1. Test JSON reporter build
  const jsonReportStr = await reporter.build(sampleData, 'json');
  const parsedJson = JSON.parse(jsonReportStr);

  assert(parsedJson.summary.severityCounts !== undefined, 'JSON report contains summary.severityCounts');
  assert(parsedJson.summary.priorityCounts !== undefined, 'JSON report contains summary.priorityCounts');
  assert(parsedJson.issues.length === 2, 'JSON report contains standardized issues array');
  assert(parsedJson.summary.overallVerdict === 'FAIL', 'Overall verdict evaluates to FAIL when errors present');

  // 2. Test Markdown reporter build
  const mdReportStr = await reporter.build(sampleData, 'markdown');
  assert(mdReportStr.includes('Summary Dashboard'), 'Markdown report contains Summary Dashboard section');
  assert(mdReportStr.includes('P0 (Critical)'), 'Markdown report contains P0 priority count');

  // 3. Test Terminal reporter build
  const termReportStr = await reporter.build(sampleData, 'terminal');
  assert(termReportStr.includes('SEVERITY DASHBOARD:'), 'Terminal report displays SEVERITY DASHBOARD');
  assert(termReportStr.includes('RECOMMENDATION'), 'Terminal report displays RECOMMENDATION category');

  console.log(`\nReporter Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runReporterTests().catch(err => {
  console.error('Reporter Test Error:', err);
  process.exit(1);
});
