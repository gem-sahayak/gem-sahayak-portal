'use strict';

const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');

async function runOrderTests() {
  console.log('=== RUNNING PLUGIN EXECUTION ORDER & PRIORITY UNIT TESTS ===');

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

  const executionLog = [];

  const pluginA = {
    manifest: { id: 'plugin-a', permissions: [], hooks: ['beforeScan'] },
    beforeScan: () => { executionLog.push('A'); }
  };

  const pluginB = {
    manifest: { id: 'plugin-b', dependencies: { 'plugin-a': '1.0.0' }, permissions: [], hooks: ['beforeScan'] },
    beforeScan: () => { executionLog.push('B'); }
  };

  registry.clear();
  registry.register(pluginB.manifest, pluginB);
  registry.register(pluginA.manifest, pluginA);

  await loader.executeHook('beforeScan', {});

  assert(executionLog[0] === 'A' && executionLog[1] === 'B', 'Plugins execute in deterministic dependency order (A before B)');

  console.log(`\nExecution Order Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runOrderTests().catch(err => {
  console.error('Order Test Error:', err);
  process.exit(1);
});
