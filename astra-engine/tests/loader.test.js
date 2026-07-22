'use strict';

const path = require('path');
const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');

async function runPluginLoaderTests() {
  console.log('=== RUNNING PLUGIN LOADER UNIT TESTS ===');

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

  const sampleDir = path.join(__dirname, '../plugins/sample-plugin');

  // 1. Load plugin from sample dir
  registry.clear();
  const record = loader.loadPluginFromDir(sampleDir);

  assert(record.id === 'sample-auditor', 'Loader loads sample plugin from dir');
  assert(record.enabled === true, 'Loaded plugin defaults to ENABLED');

  // 2. Execute hook on sample plugin
  const hookResults = await loader.executeHook('afterScan', { state: { root: '/' } });
  assert(hookResults.length === 1, 'Loader executes afterScan hook on registered plugin');
  assert(hookResults[0].status === 'SUCCESS', 'Hook execution status returns SUCCESS');
  assert(hookResults[0].data.inspectedState === true, 'Plugin context snapshot correctly provided to hook');

  console.log(`\nPlugin Loader Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPluginLoaderTests().catch(err => {
  console.error('Loader Test Error:', err);
  process.exit(1);
});
