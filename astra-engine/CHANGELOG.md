# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.2] — Phase 4C.3 (AI Content Optimization Platform) - 2026-07-22

### Added
- **AI Content Optimization Platform (`engines/optimizer/`):**
  - Content completeness & missing elements optimizer (`contentOptimizer.js`).
  - Internal linking intelligence engine (`internalLinking.js`).
  - Anchor text generator (`anchorGenerator.js`).
  - Topic expansion engine (`topicExpansion.js`).
  - Categorized FAQ generator (`faqGenerator.js`).
  - Entity expansion engine (`entityExpansion.js`).
  - Heading hierarchy & length optimizer (`headingOptimizer.js`).
  - Content gap & coverage calculator (`contentGap.js`).
  - Priority roadmap planner (`priorityPlanner.js`).
  - Recommendation aggregator (`recommendation.js`).
- **Contracts & Schemas:** Created `OptimizationReport.ts`, `OptimizationIssue.ts`, `OptimizationSuggestion.ts`, `InternalLink.ts`, `AnchorSuggestion.ts`, `TopicSuggestion.ts`, `FAQSuggestion.ts`, and `schemas/optimization.schema.json`.
- **Optimizer CLI Subcommand:** Added `node cli.js optimize` (`--json`, `--markdown`, `--links`, `--anchors`, `--entities`, `--topics`, `--faq`, `--headings`, `--roadmap`).
- **Reports Export:** Generated 10 optimization report JSON/Markdown files in `reports/latest/`.
- **Stress Benchmark:** 5,000 synthetic articles scale benchmark completed in **77 ms** (<1,200 ms target).

---

## [1.5.1] — Phase 4C.2 (Semantic SEO Intelligence Engine) - 2026-07-22

### Added
- **Semantic SEO Intelligence Engine (`engines/semantic/`):** Entity extraction, intent classification, similarity, cannibalization, clusters.
