# ASTRA ENGINE CHANGELOG

All notable changes to the ASTRA Engine project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.8.0] — Phase 5C (Enterprise Visual Knowledge Graph Explorer) - 2026-07-22

### Added
- **Enterprise Visual Knowledge Graph Explorer (`graphExplorer/`):**
  - Graph builder (`graphBuilder.js`), Node factory (`nodeFactory.js`), Edge factory (`edgeFactory.js`).
  - Specialized network explorers: `entityExplorer.js`, `keywordExplorer.js`, `documentExplorer.js`, `clusterExplorer.js`, `pluginExplorer.js`, `dependencyExplorer.js`, `relationshipExplorer.js`.
  - Graph analytics engine (`graphMetrics.js`): PageRank, Degree Centrality, Shortest Path, Orphan node detection.
  - Filters & Search engines (`filters.js`, `search.js`).
  - Serializers (`graphSerializer.js`) for D3 force-directed and Cytoscape formats.
- **Graph CLI Integration:** Extended `node cli.js graph` (`--entities`, `--keywords`, `--clusters`, `--dependencies`, `--plugins`, `--metrics`, `--orphans`, `--pagerank`, `--search`).
- **Reports Export:** Generated 6 network exports in `reports/latest/`.
- **Stress Benchmark:** 100,000 Nodes & 500,000 Edges scale benchmark completed in **614 ms** (<900 ms target).

---

## [1.7.1] — Phase 5B (Enterprise Intelligence Dashboard) - 2026-07-22

### Added
- **Enterprise Intelligence Dashboard (`dashboard/`):** Overview, SEO, Review, Semantic, Optimizer, Knowledge, Health, Performance, Telemetry dashboards.
