# ASTRA ENGINE ARCHITECTURE — v1.5.1 (Phase 4C.2 Semantic SEO Intelligence Engine)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.5.1 CLI Router]
├── PHASE4C2_COMPLETE.md           [NEW Phase 4C.2 Report]
├── ARCHITECTURE_v1.5.1.md         [NEW Architecture Diagram]
├── contracts/
│   ├── SemanticReport.ts          [NEW]
│   ├── SemanticIssue.ts           [NEW]
│   ├── SemanticScore.ts           [NEW]
│   ├── SemanticCluster.ts         [NEW]
│   └── EntityCoverage.ts          [NEW]
├── schemas/
│   └── semantic.schema.json       [NEW]
├── engines/
│   ├── semantic/                  [NEW Phase 4C.2 Semantic SEO Engine]
│   │   ├── index.js
│   │   ├── semanticEngine.js
│   │   ├── entityAnalyzer.js
│   │   ├── intentAnalyzer.js
│   │   ├── similarity.js
│   │   ├── cannibalization.js
│   │   ├── coverage.js
│   │   ├── keywordGraph.js
│   │   ├── clusterEngine.js
│   │   ├── topicalAuthority.js
│   │   └── recommendation.js
├── reports/
│   └── latest/
│       ├── semantic-report.json   [NEW]
│       ├── semantic-report.md     [NEW]
│       ├── semantic-clusters.json [NEW]
│       ├── entity-coverage.json   [NEW]
│       └── keyword-graph.json     [NEW]
└── tests/                         [52 Test Suites]
    ├── semantic.test.js           [NEW]
    ├── entity.test.js             [NEW]
    ├── cluster.test.js            [NEW]
    ├── authority.test.js          [NEW]
    ├── cannibalization.test.js    [NEW]
    ├── similarity.test.js         [NEW]
    ├── coverage.test.js           [NEW]
    ├── recommendation.test.js     [NEW]
    └── benchmark-semantic.test.js [NEW]
```
