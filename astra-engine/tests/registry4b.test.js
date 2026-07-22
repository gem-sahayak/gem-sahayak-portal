'use strict';

const registry = require('../core/plugins/registry');

async function runPluginRegistryTests() {
  console.log('=== RUNNING RUNTIME PLUGIN REGISTRY UNIT TESTS ===');

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

  const manifest = {
    id: 'test-plugin-1',
    name: 'Test Plugin 1',
    version: '1.0.0',
    permissions: ['READ_STATE'],
    hooks: ['afterScan']
  };

  registry.clear();

  // 1. Register Plugin
  const record = registry.register(manifest, {}, 'plugins/test-plugin-1');
  assert(record.id === 'test-plugin-1', 'Plugin registered successfully');
  assert(registry.list().length === 1, 'Registry lists 1 active plugin');

  // 2. Disable & Enable Plugin
  registry.disable('test-plugin-1');
  assert(registry.find('test-plugin-1').enabled === false, 'Plugin disabled successfully');

  registry.enable('test-plugin-1');
  assert(registry.find('test-plugin-1').enabled === true, 'Plugin enabled successfully');

  // 3. Unregister Plugin
  registry.unregister('test-plugin-1');
  assert(registry.find('test-plugin-1') === null, 'Plugin unregistered successfully');

  console.log(`\nPlugin Registry Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPluginRegistryTests().catch(err => {
  console.error('Registry Test Error:', err);
  process.exit(1);
});
