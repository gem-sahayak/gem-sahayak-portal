'use strict';

const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');

async function runTimeoutTests() {
  console.log('=== RUNNING PLUGIN TIMEOUT PROTECTION UNIT TESTS ===');

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

  // Create mock plugin with hanging hook
  const slowPlugin = {
    manifest: { id: 'slow-plugin', permissions: [], hooks: ['afterScan'] },
    afterScan: () => new Promise(resolve => setTimeout(resolve, 500))
  };

  registry.clear();
  registry.register(slowPlugin.manifest, slowPlugin);

  // Execute hook with short timeout (50ms)
  const results = await loader.executeHook('afterScan', {}, 50);

  assert(results.length === 1, 'Returns hook execution result record');
  assert(results[0].status === 'TIMEOUT', 'Detects hook execution timeout and returns TIMEOUT status');

  console.log(`\nTimeout Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTimeoutTests().catch(err => {
  console.error('Timeout Test Error:', err);
  process.exit(1);
});
