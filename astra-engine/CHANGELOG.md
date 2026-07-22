# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.6.0] — Phase 4C.4 (Enterprise Knowledge Intelligence Platform) - 2026-07-22

### Added
- **Enterprise Knowledge Intelligence RAG Engine (`engines/knowledge/`):**
  - Document indexer (`documentIndexer.js`).
  - Semantic, heading, & paragraph chunk engine (`chunkEngine.js`).
  - Embedding provider abstraction (`embeddingProvider.js`) with Mock Provider.
  - Offline Cosine Similarity Vector Store (`vectorStore.js`).
  - Hybrid Top K retriever (`retriever.js`).
  - Knowledge reranker (`reranker.js`).
  - Context window builder (`contextBuilder.js`).
  - Query planner & Answer planner (`queryPlanner.js`, `answerPlanner.js`).
  - Citation engine (`citationEngine.js`).
  - Knowledge Graph bridge (`knowledgeGraphBridge.js`).
  - Knowledge cache manager (`cacheManager.js`).
  - Recommendation aggregator (`recommendation.js`).
- **Contracts & Schemas:** Created `KnowledgeReport.ts`, `KnowledgeChunk.ts`, `KnowledgeQuery.ts`, `KnowledgeAnswer.ts`, `Citation.ts`, `RetrievalResult.ts`, `ContextWindow.ts`, and `schemas/knowledge.schema.json`.
- **Knowledge CLI Subcommand:** Added `node cli.js knowledge` (`--query`, `--retrieve`, `--context`, `--citations`, `--chunks`, `--index`, `--vector`, `--stats`).
- **Reports Export:** Generated 8 RAG reports in `reports/latest/`.
- **Stress Benchmark:** 10,000 synthetic documents scale benchmark completed in **113 ms** (<1,500 ms target).

---

## [1.5.2] — Phase 4C.3 (AI Content Optimization Platform) - 2026-07-22

### Added
- **AI Content Optimization Platform (`engines/optimizer/`):** Content completeness, internal linking, anchors, roadmaps.
