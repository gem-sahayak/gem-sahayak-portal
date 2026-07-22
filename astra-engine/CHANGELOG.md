# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.14.0] — Phase 8A (Enterprise Procurement Intelligence Platform) - 2026-07-22

### Added
- **Procurement Engine (`procurement/`):** Procurement session management, marketplace registry, context storage, lifecycle state machine (`DRAFT` → `PUBLISHED` → `AWARDED`), session metrics.
- **Bid Intelligence (`bidIntelligence/`):** Custom bid structure analyzer, category classification, parameter complexity scoring, milestone timeline projections, document dependency mapping.
- **Catalog Intelligence (`catalogIntelligence/`):** Catalog health scoring (0–100), category coverage percentage, specification parity comparison engine.
- **Compliance Engine (`compliance/`):** Eligibility reviewer, turnover & experience qualification matrix, document status mapper, risk level classifier (`LOW_RISK`, `MEDIUM_RISK`, `HIGH_RISK`).
- **Pricing Intelligence (`pricing/`):** Price variance calculator, competitive position percentile & deviation analyzer, statistical benchmark (mean, median, stdDev, z-score, linear trend slope).
- **Supplier Intelligence (`supplier/`):** Supplier profile completeness & tiering (`GOLD`, `SILVER`, `BRONZE`), lifecycle history logger, 4-dimension capability scoring, deterministic operational risk evaluator.
- **Market Intelligence (`market/`):** Time-series linear regression trend slope & volatility analyzer, category demand insights, Herfindahl-Hirschman Index (HHI) market concentration mapping, procurement calendar manager.
- **CLI Subcommands:** Supported `node cli.js procurement`, `bid`, `compliance`, `pricing`.
- **Report Exporters:** Exported 9 report JSONs to `reports/latest/`.
- **Stress Benchmark:** 770,000 operations scale benchmark completed in **92 ms** (<4000 ms target).

---

## [1.12.0] — Phase 7B (Enterprise Multi-Agent Intelligence Mesh) - 2026-07-22

### Added
- **Agent Engine (`agents/`):** Agent lifecycle transitions (start, stop, suspend, resume), agent registry, identity, manager, context, memory & metrics.
- **Mesh Engine (`mesh/`):** Topology coordinator, node discovery, task router, scheduler, shared state, history & metrics.
- **Communication Engine (`communication/`):** Message bus, message queue, direct messaging, broadcast, multicast, message serializer & validator.
- **Collaboration Engine (`collaboration/`):** Consensus engine, agent voting, task negotiation, conflict resolution, shared planning & reasoning.
- **Memory System (`memory/`):** Working memory, episodic memory, semantic memory, graph memory, memory index & snapshots.
- **Supervisor Engine (`supervisor/`):** Supervisor engine, health monitor, heartbeat tracker, watchdog inspector, crash recovery & restart planner.
- **CLI Integration:** Supported `node cli.js agents`, `mesh`, `collaborate`.
- **Reports Export:** Generated 10 report exports in `reports/latest/`.
- **Stress Benchmark:** 1,000 Agents, 100,000 Messages, 10,000 Negotiations, 100,000 Consensus Decisions scale benchmark completed in **365 ms** (<3000 ms target).

---

## [1.11.0] — Phase 7A (Enterprise Autonomous Reasoning & Planning Engine) - 2026-07-22

### Added
- **Reasoning Engine (`reasoning/`):** Verified fact collection, constraint reasoning, evidence tracking, decision explanation, confidence scoring.
