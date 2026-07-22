# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.7.1] — Phase 5B (Enterprise Intelligence Dashboard) - 2026-07-22

### Added
- **Enterprise Intelligence Dashboard (`dashboard/`):**
  - Overview, SEO, Review, Semantic, Optimizer, Knowledge, Health, Performance, Telemetry dashboards.
  - Visualization charts (`dashboard/charts/`): `scoreCharts.js`, `trendCharts.js`, `entityCharts.js`, `topologyCharts.js`.
  - Metric widgets (`dashboard/widgets/`): `scoreCards.js`, `issueCards.js`, `reportCards.js`, `activityFeed.js`, `projectSummary.js`, `benchmarkCards.js`.
- **Dashboard CLI Subcommand:** Added `node cli.js dashboard` (`--overview`, `--seo`, `--review`, `--semantic`, `--optimizer`, `--knowledge`, `--performance`, `--telemetry`).
- **Reports Export:** Generated 7 dashboard exports in `reports/latest/`.
- **Stress Benchmark:** 100 projects, 100,000 report objects, 10,000 widgets scale benchmark completed in **76 ms** (<700 ms target).

---

## [1.7.0] — Phase 5A (ASTRA Studio Foundation) - 2026-07-22

### Added
- **ASTRA Studio Visual AI Workspace (`studio/`):** Layout manager, workspace orchestrator, navigation manager.
