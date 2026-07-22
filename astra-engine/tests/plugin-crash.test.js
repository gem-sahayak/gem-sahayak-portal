'use strict';

const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');

async function runCrashTests() {
  console.log('=== RUNNING PLUGIN CRASH ISOLATION UNIT TESTS ===');

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

  const crashingPlugin = {
    manifest: { id: 'crashing-plugin', permissions: [], hooks: ['afterScan'] },
    afterScan: () => { throw new Error('Simulated plugin runtime crash'); }
  };

  const healthyPlugin = {
    manifest: { id: 'healthy-plugin', permissions: [], hooks: ['afterScan'] },
    afterScan: () => ({ status: 'HEALTHY' })
  };

  registry.clear();
  registry.register(crashingPlugin.manifest, crashingPlugin);
  registry.register(healthyPlugin.manifest, healthyPlugin);

  const results = await loader.executeHook('afterScan', {});

  assert(results.length === 2, 'Executes all plugins despite individual crash');
  assert(results[0].status === 'ERROR', 'Captures crashing plugin error');
  assert(results[1].status === 'SUCCESS', 'Healthy plugin continues execution normally');

  console.log(`\nCrash Isolation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCrashTests().catch(err => {
  console.error('Crash Test Error:', err);
  process.exit(1);
});
