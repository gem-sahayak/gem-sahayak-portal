# ASTRA ENGINE ARCHITECTURE — v1.9.0 (Phase 6A Enterprise Autonomous Workflow Intelligence Engine)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.9.0 CLI Router]
├── WORKFLOW_GUIDE.md              [NEW Workflow Guide]
├── RULE_ENGINE_GUIDE.md           [NEW Rule Engine Guide]
├── DECISION_ENGINE_GUIDE.md       [NEW Decision Engine Guide]
├── PHASE6A_COMPLETE.md            [NEW Phase 6A Report]
├── ARCHITECTURE_v1.9.0.md         [NEW Architecture Diagram]
├── workflow/                      [NEW Phase 6A Workflow Engine]
│   ├── index.js
│   ├── workflowEngine.js
│   ├── workflowRunner.js
│   ├── workflowScheduler.js
│   ├── workflowHistory.js
│   ├── workflowRegistry.js
│   ├── workflowValidator.js
│   ├── workflowState.js
│   ├── workflowContext.js
│   ├── workflowTemplates.js
│   └── workflowMetrics.js
├── rules/                         [NEW Phase 6A Rule Engine]
│   ├── index.js
│   ├── ruleEngine.js
│   ├── ruleCompiler.js
│   ├── conditionParser.js
│   ├── expressionEvaluator.js
│   ├── ruleRegistry.js
│   ├── actionPlanner.js
│   └── ruleMetrics.js
├── decision/                      [NEW Phase 6A Decision Intelligence]
│   ├── index.js
│   ├── recommendationEngine.js
│   ├── rankingEngine.js
│   ├── confidenceEngine.js
│   ├── priorityEngine.js
│   ├── scoringEngine.js
│   ├── decisionMetrics.js
│   └── decisionHistory.js
├── events/                        [NEW Phase 6A Event Engine]
│   ├── index.js
│   ├── eventBus.js
│   ├── eventQueue.js
│   ├── eventDispatcher.js
│   ├── listeners.js
│   ├── publish.js
│   ├── subscribe.js
│   └── eventMetrics.js
├── scheduler/                     [NEW Phase 6A Scheduler]
│   ├── index.js
│   ├── scheduler.js
│   ├── cronManager.js
│   ├── timers.js
│   ├── jobs.js
│   ├── recurringJobs.js
│   └── schedulerMetrics.js
├── recommendations/               [NEW Phase 6A Recommendation Models]
│   ├── index.js
│   ├── seoRecommendation.js
│   ├── knowledgeRecommendation.js
│   ├── optimizationRecommendation.js
│   ├── reviewRecommendation.js
│   ├── workflowRecommendation.js
│   └── riskRecommendation.js
├── reports/
│   └── latest/
│       ├── workflow-report.json       [NEW]
│       ├── workflow-history.json      [NEW]
│       ├── workflow-metrics.json      [NEW]
│       ├── rule-report.json          [NEW]
│       ├── decision-report.json      [NEW]
│       ├── event-report.json         [NEW]
│       ├── scheduler-report.json     [NEW]
│       └── recommendation-report.json [NEW]
└── tests/                         [117 Test Suites]
    ├── workflow.test.js           [NEW]
    ├── workflow-runner.test.js    [NEW]
    ├── workflow-history.test.js   [NEW]
    ├── workflow-validator.test.js [NEW]
    ├── rule-engine.test.js        [NEW]
    ├── condition-parser.test.js   [NEW]
    ├── decision.test.js           [NEW]
    ├── recommendation.test.js     [NEW]
    ├── priority.test.js           [NEW]
    ├── confidence.test.js         [NEW]
    ├── ranking.test.js            [NEW]
    ├── eventbus.test.js           [NEW]
    ├── eventqueue.test.js         [NEW]
    ├── scheduler.test.js          [NEW]
    └── benchmark-workflow.test.js [NEW]
```
