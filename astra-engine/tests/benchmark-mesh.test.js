'use strict';

const agentManager = require('../agents/agentManager');
const messageBus = require('../communication/messageBus');
const taskNegotiation = require('../collaboration/taskNegotiation');
const consensusEngine = require('../collaboration/consensusEngine');

async function runMeshBenchmark() {
  console.log('=== RUNNING MULTI-AGENT MESH STRESS BENCHMARK (1,000 AGENTS, 100,000 MESSAGES, 10,000 NEGOTIATIONS, 100,000 CONSENSUS DECISIONS SCALE) ===\n');

  const t0 = Date.now();

  // 1. Register 1,000 Agents
  for (let i = 1; i <= 1000; i++) {
    agentManager.createAgent(`agent-bm-${i}`, `Agent ${i}`, 'WORKER');
  }

  // 2. Publish 100,000 Messages across message bus
  for (let i = 1; i <= 100000; i++) {
    messageBus.publish({ sender: `agent-bm-${(i % 1000) + 1}`, payload: `Ping ${i}` });
  }

  // 3. Perform 10,000 Task Negotiations
  for (let i = 1; i <= 10000; i++) {
    taskNegotiation.negotiate(`Task-${i}`, [`agent-bm-${(i % 1000) + 1}`]);
  }

  // 4. Evaluate 100,000 Consensus Decisions
  for (let i = 1; i <= 100000; i++) {
    consensusEngine.reachConsensus(`Topic-${i}`, [{ agentId: 'agent-1', approve: true }]);
  }

  const durationMs = Date.now() - t0;

  console.log(`  - Registered Agents    : 1,000 agents`);
  console.log(`  - Messages Routed      : 100,000 messages`);
  console.log(`  - Task Negotiations    : 10,000 negotiations`);
  console.log(`  - Consensus Decisions : 100,000 decisions`);
  console.log(`  - Execution Time       : ${durationMs} ms (Target: < 3000 ms)\n`);

  if (durationMs >= 3000) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 3000 ms)`);
    process.exit(1);
  }

  console.log('✅ MULTI-AGENT MESH STRESS BENCHMARK PASSED UNDER 3000 MS!\n');
}

runMeshBenchmark().catch(err => {
  console.error('Mesh Benchmark Error:', err);
  process.exit(1);
});
