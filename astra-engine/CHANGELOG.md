# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.7.0] — Phase 5A (ASTRA Studio Foundation) - 2026-07-22

### Added
- **ASTRA Studio Visual AI Workspace (`studio/`):**
  - Layout manager, workspace orchestrator, navigation manager.
  - Project manager (`projectManager.js`), recent projects (`recentProjects.js`).
  - Report explorer auto-discovery (`reportExplorer.js`).
  - Command palette engine (`commandPalette.js`).
  - Activity bar & status bar renderers (`activityBar.js`, `statusBar.js`).
  - Notification center (`notificationCenter.js`).
  - Theme manager (`themeManager.js`) & Settings manager (`settingsManager.js`).
  - Shortcut manager (`shortcutManager.js`).
- **Studio CLI Subcommand:** Added `node cli.js studio` (`--open`, `--workspace`, `--project`, `--reports`, `--settings`).
- **Reports Export:** Generated `studio-report.json`, `workspace-report.json`, `navigation-report.json`, `settings-report.json`.
- **Stress Benchmark:** 100 projects and 1,000 queries scale benchmark completed in **7 ms** (<500 ms target).

---

## [1.6.0] — Phase 4C.4 (Enterprise Knowledge Intelligence Platform) - 2026-07-22

### Added
- **Enterprise Knowledge Intelligence RAG Engine (`engines/knowledge/`):** Document indexer, chunk engine, embedding provider, vector store, retriever, reranker, context builder.
