# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.11.0] — Phase 7A (Enterprise Autonomous Reasoning & Planning Engine) - 2026-07-22

### Added
- **Reasoning Engine (`reasoning/`):** Verified fact collection, constraint reasoning, evidence tracking, decision explanation, confidence scoring, reasoning context & graph.
- **Planning Engine (`planning/`):** Goal decomposition, objective tree, plan generator, plan comparator, execution, dependency, resource & milestone planners.
- **Strategy Engine (`strategy/`):** Primary strategy, fallback strategy, recovery strategy, parallel strategy, strategy comparison, strategy registry & templates.
- **Explainability Engine (`explainability/`):** Decision trace, reasoning trace, evidence trace, dependency trace, timeline trace, decision audit trail.
- **Scenario Planning (`scenarioPlanning/`):** What-If engine, scenario generator, comparison engine, impact estimator, scenario history & branch manager.
- **Knowledge Reasoner (`knowledgeReasoner/`):** Graph, entity, relationship, cluster, semantic, and dependency reasoners.
- **CLI Integration:** Supported `node cli.js reason`, `plan`, `strategy`, `scenario`.
- **Reports Export:** Generated 11 report exports in `reports/latest/`.
- **Stress Benchmark:** 50,000 Reasoning Nodes, 500,000 Relationships, 50,000 Scenarios scale benchmark completed in **249 ms** (<2500 ms target).

---

## [1.10.0] — Phase 6C (Enterprise Digital Twin & Simulation Intelligence Engine) - 2026-07-22

### Added
- **Simulation Engine (`simulation/`):** Dry run sandbox runtime, timeline builder, virtual executor, execution replay engine, execution history.
- **Digital Twin Engine (`digitalTwin/`):** Immutable twin mirrors of project, workflow, knowledge, entities, plugins, system, workspace, and dependencies.
