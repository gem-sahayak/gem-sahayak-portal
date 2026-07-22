'use strict';

console.log('=== PROCUREMENT ENGINE TEST SUITE ===\n');

const { procurementEngine, procurementRegistry, ProcurementContext, ProcurementLifecycle } = require('../procurement');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Procurement Engine run
(async () => {
  const res = await procurementEngine.run();
  assert(res.verdict === 'PASS', 'Procurement Engine returns PASS verdict');
  assert(res.marketplaceRegistry.length >= 1, 'At least 1 marketplace registered');
  assert(res.metrics.totalProcurementSessions >= 1, 'Session metrics incremented');

  // Test 2: Context
  const ctx = new ProcurementContext({ domain: 'government' });
  ctx.set('portal', 'GeM');
  assert(ctx.get('domain') === 'government', 'ProcurementContext stores initial data');
  assert(ctx.get('portal') === 'GeM', 'ProcurementContext stores dynamic data');

  // Test 3: Lifecycle
  const lc = new ProcurementLifecycle();
  assert(lc.getStage() === 'DRAFT', 'Lifecycle starts at DRAFT');
  lc.transition('PUBLISHED');
  assert(lc.getStage() === 'PUBLISHED', 'Lifecycle transitions to PUBLISHED');
  lc.transition('AWARDED');
  assert(lc.getStage() === 'AWARDED', 'Lifecycle transitions to AWARDED');

  console.log(`\n  Results: ${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
})();
