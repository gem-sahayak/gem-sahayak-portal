# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.2] — Phase 4B.3 (Enterprise Plugin Marketplace & SDK Ecosystem) - 2026-07-22

### Added
- **Plugin Marketplace Manager (`core/plugins/marketplace/`):** Local catalog, search engine, catalog installation, and marketplace report exporter (`reports/latest/plugin-marketplace.json`).
- **Plugin Package Format (.apkg & `core/plugins/package/`):** Validator and packager bundling plugins into portable `.apkg` archives with SHA256 checksum verification.
- **Plugin SDK CLI Tooling (`sdk/` & `cli.js`):** Added `sdk:init`, `sdk:create`, `sdk:lint`, `sdk:package`, `sdk:test`, `plugin:lock`, `marketplace`.
- **Plugin Templates (`sdk/templates/`):** Scaffold templates including `plugin.json`, `index.js`, and `README.md`.
- **Plugin Lockfile Manager (`core/plugins/lockfile.js`):** Deterministic lockfile generator writing `reports/cache/plugin-lock.json`.
- **Plugin Resource Limits (`core/plugins/limits.js`):** Max execution counts and memory heap delta assertions.
- **Developer Documentation:** Created `PLUGIN_SDK.md` and `PLUGIN_MARKETPLACE.md`.
- **Stress Benchmark (`tests/benchmark4b3.test.js`):** Validated scale up to 1,000 plugins (2 ms execution time).

---

## [1.3.1] — Phase 4B.2 (Developer Platform Integration) - 2026-07-22

### Added
- **Plugin Trust Framework (`core/plugins/trust.js`):** `OFFICIAL`, `VERIFIED`, `COMMUNITY`, `UNSIGNED`, `BLOCKED`.
- **Signature Verification (`core/plugins/signature.js`):** SHA256 checksums, `signature.sig`, `publisher.pem`.
- **Dependency Resolver (`core/plugins/dependency.js`):** Topological sort and circular dependency detection.
- **Version Manager (`core/plugins/version.js`):** SemVer parsing & engine compatibility.
- **Timeout Protection & Crash Isolation (`core/plugins/loader.js`):** 5000ms timeout per hook, non-blocking crash isolation.

---

## [1.3.0] — Phase 4B.1 (Developer Platform Foundation: Plugin SDK) - 2026-07-22

### Added
- **Plugin SDK Contracts & Core Plugin Infrastructure:** Interfaces, loader, registry, sandbox, manifest schema.

---

## [1.2.0] — Phase 4A (Core Platform Infrastructure) - 2026-07-22

### Added
- **Fingerprint DB, Incremental Scanner, Event Bus, Cache Layer, Telemetry Engine.**
