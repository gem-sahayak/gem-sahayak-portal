# ASTRA ENGINE ARCHITECTURE — v1.12.0 (Phase 7B Enterprise Multi-Agent Intelligence Mesh)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.12.0 CLI Router]
├── AGENT_GUIDE.md                 [NEW Agent Guide]
├── MESH_GUIDE.md                  [NEW Mesh Guide]
├── COMMUNICATION_GUIDE.md         [NEW Communication Guide]
├── COLLABORATION_GUIDE.md         [NEW Collaboration Guide]
├── MEMORY_GUIDE.md                [NEW Memory Guide]
├── SUPERVISOR_GUIDE.md            [NEW Supervisor Guide]
├── PHASE7B_COMPLETE.md            [NEW Phase 7B Report]
├── ARCHITECTURE_v1.12.0.md        [NEW Architecture Diagram]
├── agents/                        [NEW Phase 7B Agent Engine]
│   ├── index.js
│   ├── agentEngine.js
│   ├── agentManager.js
│   ├── agentRegistry.js
│   ├── agentIdentity.js
│   ├── agentLifecycle.js
│   ├── agentContext.js
│   ├── agentMemory.js
│   └── agentMetrics.js
├── mesh/                          [NEW Phase 7B Mesh Engine]
│   ├── index.js
│   ├── meshEngine.js
│   ├── meshCoordinator.js
│   ├── meshRouter.js
│   ├── meshScheduler.js
│   ├── meshState.js
│   ├── meshMetrics.js
│   ├── meshDiscovery.js
│   ├── meshRegistry.js
│   └── meshHistory.js
├── communication/                 [NEW Phase 7B Communication Engine]
│   ├── index.js
│   ├── messageBus.js
│   ├── messageQueue.js
│   ├── messageSerializer.js
│   ├── messageValidator.js
│   ├── messageHistory.js
│   ├── broadcast.js
│   ├── multicast.js
│   ├── directMessage.js
│   └── communicationMetrics.js
├── collaboration/                 [NEW Phase 7B Collaboration Engine]
│   ├── index.js
│   ├── consensusEngine.js
│   ├── taskNegotiation.js
│   ├── conflictResolution.js
│   ├── sharedPlanning.js
│   ├── sharedReasoning.js
│   ├── agentVoting.js
│   └── collaborationMetrics.js
├── memory/                        [NEW Phase 7B Memory System]
│   ├── index.js
│   ├── workingMemory.js
│   ├── episodicMemory.js
│   ├── semanticMemory.js
│   ├── graphMemory.js
│   ├── memoryIndex.js
│   ├── memorySnapshots.js
│   └── memoryMetrics.js
├── supervisor/                    [NEW Phase 7B Supervisor Engine]
│   ├── index.js
│   ├── supervisorEngine.js
│   ├── healthMonitor.js
│   ├── heartbeat.js
│   ├── watchdog.js
│   ├── crashRecovery.js
│   ├── restartPlanner.js
│   └── supervisorMetrics.js
├── reports/
│   └── latest/
│       ├── agents-report.json        [NEW]
│       ├── mesh-report.json          [NEW]
│       ├── mesh-health.json          [NEW]
│       ├── communication-report.json [NEW]
│       ├── consensus-report.json     [NEW]
│       ├── collaboration-report.json [NEW]
│       ├── memory-report.json        [NEW]
│       ├── heartbeat-report.json     [NEW]
│       ├── supervisor-report.json    [NEW]
│       └── agent-topology.json       [NEW]
└── tests/                         [148 Test Suites]
    ├── agent.test.js              [NEW]
    ├── mesh.test.js               [NEW]
    ├── communication.test.js      [NEW]
    ├── consensus.test.js          [NEW]
    ├── memory.test.js             [NEW]
    ├── supervisor.test.js         [NEW]
    ├── heartbeat.test.js          [NEW]
    ├── negotiation.test.js        [NEW]
    ├── collaboration.test.js      [NEW]
    └── benchmark-mesh.test.js     [NEW]
```
