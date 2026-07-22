# ASTRA ENGINE ARCHITECTURE — v1.11.0 (Phase 7A Enterprise Autonomous Reasoning & Planning Engine)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.11.0 CLI Router]
├── REASONING_GUIDE.md             [NEW Reasoning Guide]
├── PLANNING_GUIDE.md              [NEW Planning Guide]
├── STRATEGY_GUIDE.md              [NEW Strategy Guide]
├── SCENARIO_GUIDE.md              [NEW Scenario Guide]
├── EXPLAINABILITY_GUIDE.md        [NEW Explainability Guide]
├── PHASE7A_COMPLETE.md            [NEW Phase 7A Report]
├── ARCHITECTURE_v1.11.0.md        [NEW Architecture Diagram]
├── reasoning/                     [NEW Phase 7A Reasoning Engine]
│   ├── index.js
│   ├── reasoningEngine.js
│   ├── reasoningSession.js
│   ├── reasoningContext.js
│   ├── reasoningGraph.js
│   ├── reasoningHistory.js
│   ├── factEngine.js
│   ├── assumptionEngine.js
│   ├── constraintEngine.js
│   ├── evidenceCollector.js
│   ├── confidenceModel.js
│   └── reasoningMetrics.js
├── planning/                      [NEW Phase 7A Master Planner]
│   ├── index.js
│   ├── planner.js
│   ├── goalManager.js
│   ├── objectiveTree.js
│   ├── planGenerator.js
│   ├── planComparator.js
│   ├── executionPlanner.js
│   ├── dependencyPlanner.js
│   ├── resourcePlanner.js
│   ├── milestonePlanner.js
│   └── planningMetrics.js
├── strategy/                      [NEW Phase 7A Strategy Engine]
│   ├── index.js
│   ├── strategyEngine.js
│   ├── strategyRegistry.js
│   ├── strategyTemplates.js
│   ├── parallelStrategies.js
│   ├── fallbackStrategies.js
│   ├── recoveryStrategies.js
│   ├── strategyMetrics.js
│   ├── strategyHistory.js
│   └── strategyComparator.js
├── explainability/               [NEW Phase 7A Explainability Engine]
│   ├── index.js
│   ├── explanationEngine.js
│   ├── decisionTrace.js
│   ├── reasoningTrace.js
│   ├── evidenceTrace.js
│   ├── dependencyTrace.js
│   ├── timelineTrace.js
│   ├── auditTrail.js
│   └── explainabilityMetrics.js
├── scenarioPlanning/              [NEW Phase 7A Scenario Planning]
│   ├── index.js
│   ├── scenarioGenerator.js
│   ├── whatIfEngine.js
│   ├── comparisonEngine.js
│   ├── impactEstimator.js
│   ├── scenarioHistory.js
│   ├── branchManager.js
│   └── scenarioMetrics.js
├── knowledgeReasoner/             [NEW Phase 7A Knowledge Reasoner]
│   ├── index.js
│   ├── graphReasoner.js
│   ├── entityReasoner.js
│   ├── relationshipReasoner.js
│   ├── clusterReasoner.js
│   ├── semanticReasoner.js
│   ├── dependencyReasoner.js
│   └── reasonerMetrics.js
├── reports/
│   └── latest/
│       ├── reasoning-report.json     [NEW]
│       ├── reasoning-trace.json      [NEW]
│       ├── planning-report.json       [NEW]
│       ├── strategy-report.json       [NEW]
│       ├── strategy-comparison.json   [NEW]
│       ├── scenario-report.json       [NEW]
│       ├── impact-analysis.json       [NEW]
│       ├── audit-trail.json           [NEW]
│       ├── knowledge-reasoning.json   [NEW]
│       ├── confidence-report.json     [NEW]
│       └── execution-plan.json        [NEW]
└── tests/                         [138 Test Suites]
    ├── reasoning.test.js          [NEW]
    ├── planning.test.js           [NEW]
    ├── strategy.test.js           [NEW]
    ├── scenario.test.js           [NEW]
    ├── knowledge-reasoner.test.js [NEW]
    ├── constraint.test.js         [NEW]
    ├── evidence.test.js           [NEW]
    ├── trace.test.js              [NEW]
    ├── audit.test.js              [NEW]
    └── benchmark-reasoning.test.js[NEW]
```
