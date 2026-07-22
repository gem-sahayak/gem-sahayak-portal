# ASTRA ENGINE ARCHITECTURE — v1.6.0 (Phase 4C.4 Enterprise Knowledge Intelligence Platform)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.6.0 CLI Router]
├── PHASE4C4_COMPLETE.md           [NEW Phase 4C.4 Report]
├── ARCHITECTURE_v1.6.0.md         [NEW Architecture Diagram]
├── contracts/
│   ├── KnowledgeReport.ts         [NEW]
│   ├── KnowledgeChunk.ts          [NEW]
│   ├── KnowledgeQuery.ts          [NEW]
│   ├── KnowledgeAnswer.ts         [NEW]
│   ├── Citation.ts                [NEW]
│   ├── RetrievalResult.ts         [NEW]
│   └── ContextWindow.ts           [NEW]
├── schemas/
│   └── knowledge.schema.json      [NEW]
├── engines/
│   ├── knowledge/                 [NEW Phase 4C.4 Enterprise Knowledge RAG Engine]
│   │   ├── index.js
│   │   ├── knowledgeEngine.js
│   │   ├── documentIndexer.js
│   │   ├── chunkEngine.js
│   │   ├── embeddingProvider.js
│   │   ├── vectorStore.js
│   │   ├── retriever.js
│   │   ├── reranker.js
│   │   ├── contextBuilder.js
│   │   ├── citationEngine.js
│   │   ├── queryPlanner.js
│   │   ├── answerPlanner.js
│   │   ├── knowledgeGraphBridge.js
│   │   ├── cacheManager.js
│   │   └── recommendation.js
├── reports/
│   └── latest/
│       ├── knowledge-report.json  [NEW]
│       ├── knowledge-report.md    [NEW]
│       ├── vector-index.json      [NEW]
│       ├── chunk-report.json      [NEW]
│       ├── retrieval-report.json  [NEW]
│       ├── context-report.json    [NEW]
│       ├── citation-report.json   [NEW]
│       └── knowledge-cache.json   [NEW]
└── tests/                         [72 Test Suites]
    ├── knowledge.test.js          [NEW]
    ├── chunk.test.js              [NEW]
    ├── vector.test.js             [NEW]
    ├── retriever.test.js          [NEW]
    ├── reranker.test.js           [NEW]
    ├── context.test.js            [NEW]
    ├── query-planner.test.js      [NEW]
    ├── citation.test.js           [NEW]
    ├── cache-knowledge.test.js    [NEW]
    └── benchmark-knowledge.test.js [NEW]
```
