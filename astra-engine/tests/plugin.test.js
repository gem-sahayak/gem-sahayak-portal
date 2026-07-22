'use strict';

const path = require('path');
const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');
const sandbox = require('../core/plugins/sandbox');

async function runPluginFullSuiteTests() {
  console.log('=== RUNNING PLUGIN SDK FULL SUITE INTEGRATION TESTS ===');

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

  // 1. Plugin Discovery Test
  const discovered = loader.discoverPlugins();
  assert(discovered.length >= 1, 'Plugin loader discovers sample-plugin folder');

  // 2. Integration hook execution pipeline
  registry.clear();
  loader.loadPluginFromDir(discovered[0].folder);

  const reportHookRes = await loader.executeHook('afterReport', { reports: { reportId: 101 } });
  assert(reportHookRes.length === 1, 'Executes afterReport hook pipeline');
  assert(reportHookRes[0].data.inspectedReports === true, 'Plugin inspected reports snapshot safely');

  console.log(`\nPlugin Full Suite Integration Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPluginFullSuiteTests().catch(err => {
  console.error('Plugin Integration Test Error:', err);
  process.exit(1);
});
