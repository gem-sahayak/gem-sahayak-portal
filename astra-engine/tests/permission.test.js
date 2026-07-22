'use strict';

const sandbox = require('../core/plugins/sandbox');

async function runPermissionTests() {
  console.log('=== RUNNING PLUGIN PERMISSION & SECURITY UNIT TESTS ===');

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
    id: 'read-only-plugin',
    permissions: ['READ_STATE']
  };

  const rawState = { val: 42, nested: { prop: 'test' } };
  const ctx = sandbox.createContext(manifest, { state: rawState, reports: { r: 1 } });

  // 1. Permission granted check
  assert(ctx.stateSnapshot !== undefined, 'READ_STATE permission grants access to stateSnapshot');
  assert(ctx.reportsSnapshot === undefined, 'Lacking READ_REPORTS permission omits reportsSnapshot');

  // 2. Immutability check (attempt mutation)
  let mutationFailed = false;
  try {
    ctx.stateSnapshot.nested.prop = 'hacked';
  } catch (e) {
    mutationFailed = true;
  }

  assert(mutationFailed === true || ctx.stateSnapshot.nested.prop === 'test', 'Sandbox snapshot is deeply frozen (Mutation blocked)');

  console.log(`\nPlugin Permission Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPermissionTests().catch(err => {
  console.error('Permission Test Error:', err);
  process.exit(1);
});
