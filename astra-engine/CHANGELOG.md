# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.1] — Phase 3.1 (Reporting Framework & Severity System) - 2026-07-22

### Added
- **Severity Framework (`core/reporter/severity.js`):** Classifies issue findings into 4 distinct severities:
  - `PASS`: No issue detected.
  - `RECOMMENDATION`: Editorial / optimization suggestion (never blocks CI).
  - `WARNING`: Important issue requiring attention (does not immediately block deployment).
  - `FAIL`: Critical integrity failure (must block CI / deployment).
- **Priority System:** Assigns priority levels `P0` (Critical), `P1` (High), `P2` (Medium), `P3` (Editorial).
- **Standard Issue Object Schema:** Every finding follows uniform shape `{ id, engine, validator, severity, priority, code, file, entity, message, recommendation }`.
- **Standardized Issue Codes:** `REG001`-`REG002`, `SEO001`-`SEO015`, `GRAPH001`-`GRAPH008`.
- **Reporter Dashboard Upgrade (`core/reporter/index.js`):** Unified JSON, Markdown, and Terminal reports presenting Severity & Priority dashboards.
- **Unit Test Suite (`tests/`):** Added `severity.test.js`, `priority.test.js`, and `reporter.test.js`.

### Preserved & Unchanged
- **Zero Engine Logic Mutations:** Scanner, Registry Engine, SEO Engine, Knowledge Graph Engine, Parsers, State Manager, and Security Guards remain 100% untouched.
- **Observer-Only:** Zero writes outside `astra-engine/reports/`. Full backward compatibility for `report.json`, `report.md`, and CLI commands (`doctor`, `registry`, `seo`, `graph`, `validate`).

---

## [1.1.0] — Phase 3 (SEO Engine & Knowledge Graph Engine) - 2026-07-22

### Added
- **SEO Engine (`engines/seo/index.js`):** Multi-factor validation for metadata, titles, descriptions, canonical URLs, link quality, and heading hierarchy.
- **Knowledge Graph Engine (`engines/graph/index.js`):** Topology analysis for parent/child/hub/spoke structures, cycle detection, orphan detection, dead ends, and max graph depth.
- **Knowledge Graph Builder (`core/graph/index.js`):** O(V+E) memoized DFS graph topology builder.
- **Isolated Core Validators (`core/validators/`):** Title, Description, Canonical, Links, Registry, Entity, Graph validators.
- **JSON Schemas (`schemas/`):** `metadata.schema.json`, `entity.schema.json`.
- **CLI Commands:** Added `astra seo`, `astra graph`, `astra validate`.
- **Test Suite (`tests/`):** `seo.test.js`, `graph.test.js`, `stress.test.js` (1,000 synthetic articles in 61ms).
- **Certification Docs:** `PHASE3_CERTIFIED.md` and git tag `astra-engine-v1.1.0-phase3-certified`.

---

## [1.0.1] — Phase 2 Hardening & Security Freeze - 2026-07-22

### Fixed
- **SEC-001:** Removed `new Function()` from `core/parser/typescript.js`. Replaced with pure lexical tokenizer.
- **SEC-002:** Added `core/guards/pathGuard.js` to restrict report writes strictly to `astra-engine/reports/`.
- **SEC-003:** Added `core/guards/importGuard.js` to block production imports (`/src/`, `/app/`, `react`, etc.).
- **CLI-001:** Added `help` subcommand support (`cli.js help`, `--help`, `-h`).
- **STYLE-001:** Added `'use strict';` directive to all CommonJS runtime files.

---

## [1.0.0] — Phase 1 Core Engine Foundation - 2026-07-22

### Added
- Initial ASTRA Engine core structure (`contracts/`, `core/`, `engines/registry/`, `schemas/`, `policies/`).
- Filesystem scanner (`core/filesystem/index.js`) with SHA256 checksum fingerprinting.
- Immutable state manager (`core/state/index.js`) with recursive `deepFreeze()`.
- Markdown parser (`core/parser/markdown.js`) for frontmatter & headings extraction without rendering.
- Multi-format reporter (`core/reporter/index.js`) for JSON, Markdown, and Terminal.
- CLI entry point (`cli.js`) with `doctor`, `scan`, `registry` subcommands.
