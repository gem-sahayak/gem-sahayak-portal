'use strict';

const { simulationEngine } = require('../simulation');

async function runSimulationTests() {
  console.log('=== RUNNING SIMULATION ENGINE BASIC UNIT TESTS ===');

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

  assert(simulationEngine.manifest.name === 'Enterprise Simulation Intelligence Engine', 'Simulation engine returns correct manifest name');
  assert(simulationEngine.manifest.version === '1.10.0', 'Simulation engine returns version 1.10.0');

  console.log(`\nSimulation Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSimulationTests().catch(err => {
  console.error('Simulation Test Error:', err);
  process.exit(1);
});
