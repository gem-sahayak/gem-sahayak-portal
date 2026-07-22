'use strict';

const dependencyResolver = require('../core/plugins/dependency');
const pluginRegistry = require('../core/plugins/registry');

async function runDiagnosticsTests() {
  console.log('=== RUNNING DEVELOPER DIAGNOSTICS UNIT TESTS ===');

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

  const depRes = dependencyResolver.resolveExecutionOrder(pluginRegistry.plugins);
  assert(depRes.valid === true, 'Developer diagnostics validates dependency graph with 0 errors');

  console.log(`\nDiagnostics Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDiagnosticsTests().catch(err => {
  console.error('Diagnostics Test Error:', err);
  process.exit(1);
});
