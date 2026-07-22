# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] — Phase 3 (SEO Engine & Knowledge Graph Engine) - 2026-07-22

### Added
- **SEO Engine (`engines/seo/index.js`):** Multi-factor validation for metadata, titles, descriptions, canonical URLs, link quality, and heading hierarchy.
- **Knowledge Graph Engine (`engines/graph/index.js`):** Topology analysis for parent/child/hub/spoke structures, cycle detection, orphan detection, dead ends, and max graph depth.
- **Knowledge Graph Builder (`core/graph/index.js`):** O(V+E) memoized DFS graph topology builder.
- **Isolated Core Validators (`core/validators/`):**
  - `title.validator.js` (length, presence, uniqueness)
  - `description.validator.js` (length, presence, duplicate descriptions)
  - `canonical.validator.js` (base domain, dual-path canonicals, duplicate URLs)
  - `links.validator.js` (broken internal article/tool links, heading hierarchy jumps)
  - `registry.validator.js` (category consistency, empty hubs)
  - `entity.validator.js` (entity schema, parent/child relationships)
  - `graph.validator.js` (self-loops, orphan articles/tools, dead ends, isolated clusters)
- **JSON Schemas (`schemas/`):**
  - `metadata.schema.json`
  - `entity.schema.json`
- **CLI Commands:** Added `astra seo`, `astra graph`, `astra validate`.
- **Test Suite (`tests/`):** `seo.test.js`, `graph.test.js`, `stress.test.js` (1,000 synthetic articles evaluated in 61ms).
- **Certification Docs:** `PHASE3_CERTIFIED.md` and git tag `astra-engine-v1.1.0-phase3-certified`.

### Performance
- Total 3-engine suite execution time: **312ms avg** across 100 iterations on live workspace.
- 1,000 articles stress test execution: **61ms total** (Heap peak 8.52 MB).
- 5,000 articles stress test execution: **515ms total**.

### Security
- Retained strict `ImportGuardError` and `ReporterPathViolationError`.
- Zero executable `eval()`, `new Function()`, `vm`, or `child_process` calls.

---

## [1.0.1] — Phase 2 Hardening & Security Freeze - 2026-07-22

### Fixed
- **SEC-001:** Completely removed `new Function()` from `core/parser/typescript.js`. Replaced with pure lexical tokenizer (bracket depth tracking + regex value extraction).
- **SEC-002:** Added `core/guards/pathGuard.js` to restrict all report writes strictly to `astra-engine/reports/`.
- **SEC-003:** Added `core/guards/importGuard.js` to block ASTRA modules from importing `/src/`, `/app/`, `/posts/`, `/extension/`, `next`, or `react`.
- **CLI-001:** Added `help` subcommand support (`cli.js help`, `--help`, `-h`).
- **STYLE-001:** Added `'use strict';` directive to all 11 CommonJS files for `Object.freeze` error throwing.

### Added
- `PHASE2_FINAL_FREEZE.md`, `PHASE2_CERTIFIED.md`, and git tag `astra-engine-v1.0.1-phase2-certified`.

---

## [1.0.0] — Phase 1 & 2 Core Engine Foundation - 2026-07-22

### Added
- Initial ASTRA Engine core structure (`contracts/`, `core/`, `engines/registry/`, `schemas/`, `policies/`).
- Filesystem recursive scanner (`core/filesystem/index.js`) with SHA256 checksum fingerprinting.
- Immutable state manager (`core/state/index.js`) with recursive `deepFreeze()`.
- Markdown parser (`core/parser/markdown.js`) for frontmatter & headings extraction without rendering.
- Multi-format reporter (`core/reporter/index.js`) for JSON, Markdown, and Terminal.
- CLI entry point (`cli.js`) with `doctor`, `scan`, `registry` subcommands.
- Initial git tag `astra-engine-v1.0-phase2`.
