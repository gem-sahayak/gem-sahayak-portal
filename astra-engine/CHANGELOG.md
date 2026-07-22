# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.4.0] — Phase 4B.4 (Enterprise DevOps Platform: CI/CD & Release Automation) - 2026-07-22

### Added
- **GitHub Actions Workflows (`.github/workflows/`):**
  - `astra-ci.yml` (CI Quality Gate running doctor, unit tests, validation sub-engines, artifact uploads)
  - `astra-release.yml` (Automated Release pipeline running release manager and exporting package artifacts)
- **Release Automation Engine (`core/release/`):**
  - `gitMetadata.js` (Extracts git commit hashes, tags, and commit messages)
  - `versionManager.js` (SemVer version bump resolution)
  - `releaseNotes.js` (Generates Markdown release notes with categorized changes)
  - `releaseManager.js` (Exports `release.json`, `release.md`, `release.html`, `release-summary.json` to `reports/releases/`)
- **Build Verification Engine (`core/build/`):**
  - `checksum.js` (SHA256 build checksum verifier)
  - `integrity.js` (Essential core file integrity checker)
  - `validator.js` (Build validator running integrity checks in <2ms)
- **DevOps CLI Commands:** Added `release`, `changelog`, `build`, `verify`, `ci`, `version`, `artifacts`.
- **Developer Documentation:** Created `DEVOPS_GUIDE.md` and `CI_CD_GUIDE.md`.

---

## [1.3.2] — Phase 4B.3 (Enterprise Plugin Marketplace & SDK Ecosystem) - 2026-07-22

### Added
- **Plugin Marketplace Manager (`core/plugins/marketplace/`):** Local catalog, search engine, catalog installation.
- **Plugin Package Format (.apkg & `core/plugins/package/`):** Portable `.apkg` packager with SHA256 checksums.
- **Plugin SDK CLI Tooling (`sdk/` & `cli.js`):** `sdk:init`, `sdk:create`, `sdk:lint`, `sdk:package`, `sdk:test`, `plugin:lock`, `marketplace`.

---

## [1.3.1] — Phase 4B.2 (Developer Platform Integration) - 2026-07-22

### Added
- **Plugin Trust Framework (`core/plugins/trust.js`):** `OFFICIAL`, `VERIFIED`, `COMMUNITY`, `UNSIGNED`, `BLOCKED`.
- **Signature Verification (`core/plugins/signature.js`):** SHA256 checksums, `signature.sig`, `publisher.pem`.
- **Dependency Resolver (`core/plugins/dependency.js`):** Topological sort and circular dependency detection.
- **Version Manager (`core/plugins/version.js`):** SemVer parsing & engine compatibility.

---

## [1.3.0] — Phase 4B.1 (Developer Platform Foundation: Plugin SDK) - 2026-07-22

### Added
- **Plugin SDK Contracts & Core Plugin Infrastructure:** Interfaces, loader, registry, sandbox, manifest schema.

---

## [1.2.0] — Phase 4A (Core Platform Infrastructure) - 2026-07-22

### Added
- **Fingerprint DB, Incremental Scanner, Event Bus, Cache Layer, Telemetry Engine.**
