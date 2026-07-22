# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] — Phase 4B.1 (Developer Platform Foundation: Plugin SDK) - 2026-07-22

### Added
- **Plugin SDK Contracts (`contracts/`):**
  - `Plugin.ts` (IAstraPlugin & IAstraPluginManifest interfaces)
  - `PluginContext.ts` (IAstraPluginContext interface)
  - `PluginResult.ts` (IAstraPluginResult interface)
  - `PluginLifecycle.ts` (PluginLifecycleState enum)
- **Plugin Loader Engine (`core/plugins/`):**
  - `loader.js` (Discovers, validates manifest, loads/unloads, executes lifecycle hook pipelines)
  - `registry.js` (Runtime registry: `register`, `unregister`, `enable`, `disable`, `list`, `find`)
  - `sandbox.js` (Generates deepFrozen immutable context snapshots & enforces permission assertions)
  - `manifest.js` (Validates `plugin.json` against `plugin.schema.json`)
- **Plugin Schema (`schemas/plugin.schema.json`):** Validates plugin manifests for `id`, `name`, `version`, `permissions`, `hooks`.
- **CLI Commands:** Added `plugins`, `plugin:list`, `plugin:validate`, `plugin:load`, `plugin:disable`.
- **Unit Test Suite (`tests/`):** Added `manifest.test.js`, `permission.test.js`, `registry4b.test.js`, `loader.test.js`, and `plugin.test.js` (100% pass rate).
- **Sample Read-Only Plugin (`plugins/sample-plugin/`):** Sample audit plugin testing hook execution pipelines.

### Security & Isolation
- **Read-Only Permission Enforcement:** Supported read permissions `READ_REPORTS`, `READ_STATE`, `READ_RESULTS`, `READ_GRAPH`, `READ_REGISTRY`. Zero write permissions allowed.
- **Deep Freeze Isolation:** Plugin contexts are deeply frozen using `Reflect.ownKeys()` recursion to prevent plugin state mutation.
- **Import & Path Guards Preserved:** Plugins cannot bypass `ImportGuard` or `PathGuard`.

---

## [1.2.0] — Phase 4A (Core Platform Infrastructure) - 2026-07-22

### Added
- **Fingerprint Database (`core/fingerprint/`):** SHA256 composite workspace fingerprints stored in `reports/cache/fingerprint-db.json`.
- **Incremental Scanner (`core/incremental/`):** Delta scan comparer (`added`, `modified`, `deleted`, `unchanged`).
- **Event Bus (`core/events/`):** Real-time event bus activating `contracts/Event.ts` with 8 event channels.
- **Cache Layer (`core/cache/`):** In-memory TTL cache & domain snapshot manager.
- **Telemetry Engine (`core/telemetry/`):** Performance metrics tracking runtimes, throughput, and memory bounds.
- **CLI Commands:** Added `fingerprint`, `incremental`, `cache`, `telemetry`.

---

## [1.1.1] — Phase 3.1 (Reporting Framework & Severity System) - 2026-07-22

### Added
- **Severity Framework (`core/reporter/severity.js`):** `PASS`, `RECOMMENDATION`, `WARNING`, `FAIL`.
- **Priority System:** `P0` (Critical), `P1` (High), `P2` (Medium), `P3` (Editorial).
- **Standard Issue Schema & Codes:** Standardized shape across JSON, Markdown, and Terminal reports.

---

## [1.1.0] — Phase 3 (SEO Engine & Knowledge Graph Engine) - 2026-07-22

### Added
- **SEO Engine & Knowledge Graph Engine:** Multi-factor metadata, canonicals, links, graph topology, cycle detection.

---

## [1.0.1] — Phase 2 Hardening & Security Freeze - 2026-07-22

### Fixed
- **SEC-001:** Removed `new Function()`. Added pure lexical parser.
- **SEC-002 / SEC-003:** Added `pathGuard.js` and `importGuard.js`.

---

## [1.0.0] — Phase 1 Core Engine Foundation - 2026-07-22

### Added
- Initial ASTRA Engine core structure, scanner, parser, state manager, reporter, and CLI.
