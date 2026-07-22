# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.9.0] — Phase 6A (Enterprise Autonomous Workflow Intelligence Engine) - 2026-07-22

### Added
- **Workflow Intelligence Engine (`workflow/`):** Runner (`workflowRunner.js`), History (`workflowHistory.js`), Registry (`workflowRegistry.js`), Validator (`workflowValidator.js`), State (`workflowState.js`), Context (`workflowContext.js`), Templates (`workflowTemplates.js`), Metrics (`workflowMetrics.js`).
- **Rule Engine (`rules/`):** Condition parser (`conditionParser.js`), Expression evaluator (`expressionEvaluator.js`), Rule compiler (`ruleCompiler.js`), Rule registry (`ruleRegistry.js`), Action planner (`actionPlanner.js`), Rule metrics (`ruleMetrics.js`).
- **Decision Intelligence (`decision/`):** Confidence engine (`confidenceEngine.js`), Priority engine (`priorityEngine.js`), Scoring engine (`scoringEngine.js`), Ranking engine (`rankingEngine.js`), Decision metrics (`decisionMetrics.js`), Decision history (`decisionHistory.js`), Recommendation engine (`recommendationEngine.js`).
- **Event Engine (`events/`):** Event queue (`eventQueue.js`), Event dispatcher (`eventDispatcher.js`), Listeners (`listeners.js`), Publisher (`publish.js`), Subscriber (`subscribe.js`), Event bus (`eventBus.js`), Event metrics (`eventMetrics.js`).
- **Autonomous Scheduler (`scheduler/`):** Timers (`timers.js`), Cron manager (`cronManager.js`), Jobs (`jobs.js`), Recurring jobs (`recurringJobs.js`), Scheduler metrics (`schedulerMetrics.js`), Scheduler (`scheduler.js`).
- **Recommendation Models (`recommendations/`):** SEO, Knowledge, Optimization, Review, Workflow, Risk recommendation models.
- **CLI Integration:** Supported `node cli.js workflow` (`--run`, `--history`, `--metrics`, `--rules`, `--recommend`, `--events`, `--queue`, `--schedule`).
- **Reports Export:** Generated 8 report exports in `reports/latest/`.
- **Stress Benchmark:** 1,000 Workflows, 10,000 Rules, 100,000 Events scale benchmark completed in **306 ms** (<1000 ms target).

---

## [1.8.0] — Phase 5C (Enterprise Visual Knowledge Graph Explorer) - 2026-07-22

### Added
- **Enterprise Visual Knowledge Graph Explorer (`graphExplorer/`):** Node & Edge factories, PageRank analytics, graph search, serializers.
