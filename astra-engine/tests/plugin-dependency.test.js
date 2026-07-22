'use strict';

const dependencyResolver = require('../core/plugins/dependency');

async function runDependencyTests() {
  console.log('=== RUNNING PLUGIN DEPENDENCY RESOLVER UNIT TESTS ===');

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

  const mapNormal = new Map([
    ['plugin-b', { manifest: { id: 'plugin-b', dependencies: { 'plugin-a': '1.0.0' } } }],
    ['plugin-a', { manifest: { id: 'plugin-a', dependencies: {} } }]
  ]);

  const resOrder = dependencyResolver.resolveExecutionOrder(mapNormal);
  assert(resOrder.valid === true, 'Valid dependency graph resolves successfully');
  assert(resOrder.order.indexOf('plugin-a') < resOrder.order.indexOf('plugin-b'), 'Topological order places dependencies before dependent plugins');

  // Circular Dependency Test
  const mapCircular = new Map([
    ['plugin-c', { manifest: { id: 'plugin-c', dependencies: { 'plugin-d': '1.0.0' } } }],
    ['plugin-d', { manifest: { id: 'plugin-d', dependencies: { 'plugin-c': '1.0.0' } } }]
  ]);

  const resCirc = dependencyResolver.resolveExecutionOrder(mapCircular);
  assert(resCirc.valid === false, 'Detects circular dependency loops');

  console.log(`\nDependency Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runDependencyTests().catch(err => {
  console.error('Dependency Test Error:', err);
  process.exit(1);
});
