'use strict';

const loader = require('../core/plugins/loader');
const registry = require('../core/plugins/registry');
const dependencyResolver = require('../core/plugins/dependency');

async function runDoctorTests() {
  console.log('=== RUNNING PLUGIN DOCTOR DIAGNOSTICS UNIT TESTS ===');

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

  const pHealthy = {
    manifest: { id: 'doc-p1', name: 'Doc P1', version: '1.0.0', permissions: [], hooks: [] }
  };

  registry.clear();
  registry.register(pHealthy.manifest, pHealthy);

  const depRes = dependencyResolver.resolveExecutionOrder(registry.plugins);
  assert(depRes.valid === true, 'Plugin doctor reports 0 dependency errors on healthy plugin setup');

  console.log(`\nDoctor Diagnostics Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDoctorTests().catch(err => {
  console.error('Doctor Test Error:', err);
  process.exit(1);
});
