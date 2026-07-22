'use strict';

const dependencyResolver = require('../core/plugins/dependency');
const pluginTrustManager = require('../core/plugins/trust');
const manifestValidator = require('../core/plugins/manifest');

async function runPhase4B3Benchmark() {
  console.log('=== RUNNING PHASE 4B.3 ENTERPRISE PLUGIN MARKETPLACE STRESS BENCHMARK ===\n');

  const scales = [100, 500, 1000];

  for (const scale of scales) {
    console.log(`--- Benchmark Scale: ${scale} Plugins ---`);

    const mockPlugins = new Map();
    for (let i = 1; i <= scale; i++) {
      const id = `bench-plugin-${i}`;
      const dep = i > 1 ? { [`bench-plugin-${i - 1}`]: '1.0.0' } : {};
      mockPlugins.set(id, {
        manifest: {
          id,
          name: `Bench Plugin ${i}`,
          version: '1.0.0',
          engineVersion: '1.3.2',
          dependencies: dep,
          permissions: ['READ_STATE'],
          hooks: ['afterScan']
        }
      });
    }

    // 1. Validation Benchmark
    const valT0 = Date.now();
    for (const [id, rec] of mockPlugins.entries()) {
      manifestValidator.validateManifest(rec.manifest);
    }
    const valTime = Date.now() - valT0;

    // 2. Dependency Resolution Benchmark (O(V+E))
    const depT0 = Date.now();
    const depRes = dependencyResolver.resolveExecutionOrder(mockPlugins);
    const depTime = Date.now() - depT0;

    console.log(`  - Validation Time (${scale} plugins) : ${valTime} ms`);
    console.log(`  - Dependency Resolution Time        : ${depTime} ms (O(V+E))`);
    console.log(`  - Order Resolved Count              : ${depRes.order.length} plugins\n`);
  }

  console.log('✅ PHASE 4B.3 STRESS BENCHMARK COMPLETE!\n');
}

runPhase4B3Benchmark().catch(err => {
  console.error('Phase 4B.3 Benchmark Error:', err);
  process.exit(1);
});
