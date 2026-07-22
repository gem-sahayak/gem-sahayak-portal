# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.0] — Phase 4C.1 (AI Review Engine Architecture) - 2026-07-22

### Added
- **AI Review Engine (`engines/review/`):**
  - Semantic audit engine evaluating search intent, EEAT, content completeness, topical coverage, entities, and freshness.
  - Category scoring engine calculating overall score (0-100) and 9 individual category metrics.
  - Recommendation engine generating actionable improvements with confidence scores (0-1) and priority mapping.
- **Provider Abstraction Adapters (`engines/review/adapters/`):**
  - `baseAdapter.js` (Base class interface for LLM provider adapters)
  - `mockAdapter.js` (Deterministic zero-network mock adapter executing in **6 ms**)
- **Contracts & Schemas:** Created `contracts/Review.ts`, `contracts/ReviewIssue.ts`, `contracts/ReviewScore.ts`, and `schemas/review.schema.json`.
- **Review CLI Subcommand:** Added `node cli.js review` (`--json`, `--markdown`, `--score`, `--article`).
- **Reports Export:** Generated `reports/latest/review-report.json` and `reports/latest/review-report.md`.

---

## [1.4.0] — Phase 4B.4 (Enterprise DevOps Platform: CI/CD & Release Automation) - 2026-07-22

### Added
- **GitHub Actions Workflows (`.github/workflows/`):** `astra-ci.yml`, `astra-release.yml`.
- **Release Automation Engine (`core/release/`):** `releaseManager.js`, `releaseNotes.js`, `versionManager.js`, `gitMetadata.js`.
- **Build Verification Engine (`core/build/`):** `validator.js`, `integrity.js`, `checksum.js`.

---

## [1.3.2] — Phase 4B.3 (Enterprise Plugin Marketplace & SDK Ecosystem) - 2026-07-22

### Added
- **Plugin Marketplace Manager (`core/plugins/marketplace/`):** Local catalog, search engine, catalog installation.
- **Plugin Package Format (.apkg & `core/plugins/package/`):** Portable `.apkg` packager with SHA256 checksums.
