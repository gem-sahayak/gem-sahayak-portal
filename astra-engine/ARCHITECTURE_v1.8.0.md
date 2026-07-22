# ASTRA ENGINE ARCHITECTURE — v1.8.0 (Phase 5C Enterprise Visual Knowledge Graph Explorer)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.8.0 CLI Router]
├── GRAPH_EXPLORER_GUIDE.md        [NEW Graph Explorer Guide]
├── PHASE5C_COMPLETE.md            [NEW Phase 5C Report]
├── ARCHITECTURE_v1.8.0.md         [NEW Architecture Diagram]
├── graphExplorer/                 [NEW Phase 5C Visual Knowledge Graph Explorer]
│   ├── index.js
│   ├── explorerEngine.js
│   ├── graphBuilder.js
│   ├── nodeFactory.js
│   ├── edgeFactory.js
│   ├── entityExplorer.js
│   ├── keywordExplorer.js
│   ├── documentExplorer.js
│   ├── clusterExplorer.js
│   ├── pluginExplorer.js
│   ├── dependencyExplorer.js
│   ├── relationshipExplorer.js
│   ├── filters.js
│   ├── search.js
│   ├── graphSerializer.js
│   └── graphMetrics.js
├── reports/
│   └── latest/
│       ├── graph-explorer.json    [NEW]
│       ├── graph-metrics.json     [NEW]
│       ├── entity-network.json    [NEW]
│       ├── dependency-network.json[NEW]
│       ├── knowledge-network.json [NEW]
│       └── cluster-network.json   [NEW]
└── tests/                         [102 Test Suites]
    ├── graph-explorer.test.js     [NEW]
    ├── entity-network.test.js     [NEW]
    ├── dependency-network.test.js [NEW]
    ├── relationship.test.js       [NEW]
    ├── pagerank.test.js           [NEW]
    ├── pathfinding.test.js        [NEW]
    ├── orphan.test.js             [NEW]
    ├── search-graph.test.js       [NEW]
    ├── graph-export.test.js       [NEW]
    └── benchmark-graph.test.js    [NEW]
```
