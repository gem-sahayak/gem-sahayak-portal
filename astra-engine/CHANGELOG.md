# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.1] — Phase 4C.2 (Semantic SEO Intelligence Engine) - 2026-07-22

### Added
- **Semantic SEO Intelligence Engine (`engines/semantic/`):**
  - Entity extraction & density analyzer (`entityAnalyzer.js`).
  - Search intent, content type, & audience classifier (`intentAnalyzer.js`).
  - High-speed Jaccard semantic similarity calculator (`similarity.js`).
  - Keyword cannibalization detector (`cannibalization.js`).
  - Topic coverage & knowledge completeness evaluator (`coverage.js`).
  - Keyword & Entity graph generator (`keywordGraph.js`).
  - Content cluster engine (`clusterEngine.js`).
  - Topical authority calculator (`topicalAuthority.js`).
  - Recommendation engine for top priority SEO improvements (`recommendation.js`).
- **Contracts & Schemas:** Created `SemanticReport.ts`, `SemanticIssue.ts`, `SemanticScore.ts`, `SemanticCluster.ts`, `EntityCoverage.ts`, and `schemas/semantic.schema.json`.
- **Semantic CLI Subcommand:** Added `node cli.js semantic` (`--json`, `--markdown`, `--clusters`, `--entities`, `--cannibalization`, `--authority`).
- **Reports Export:** Generated `semantic-report.json`, `semantic-report.md`, `semantic-clusters.json`, `entity-coverage.json`, and `keyword-graph.json`.
- **Stress Benchmark:** 1,000 synthetic articles scale benchmark completed in **465 ms** (<3,000 ms target).

---

## [1.5.0] — Phase 4C.1 (AI Review Engine Architecture) - 2026-07-22

### Added
- **AI Review Engine (`engines/review/`):** Semantic audit engine evaluating search intent, EEAT, and content completeness.
- **Provider Abstraction Adapters (`engines/review/adapters/`):** `baseAdapter.js` & `mockAdapter.js`.
